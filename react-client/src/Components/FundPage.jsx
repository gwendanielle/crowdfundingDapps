import React, { Component } from 'react';

const API = 'http://fundeth.localtunnel.me/api/projects/details/?project=';
var address = "asdfads";
class FundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: null,
          id: this.props.id,
          ContractInstance: this.props.contractInstance
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
      
    componentDidMount() {
      let id = this.state.id;
      fetch(API + id)
        .then(res => {
            return res.json();
        })
        .then(
          (result) => {
            address = result.creator_address;
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    onSubmit(e) {
        e.preventDefault();
        let amount = document.getElementById('amount').value;
        this.props.contractInstance.fund(address, {
          gas: 300000,
          from: web3.eth.accounts[0],
          value: web3.toWei(parseFloat(amount), 'ether')
        }, (err, result) => {
          fetch(API + this.state.id, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                  
            },
            body:JSON.stringify({amount:amount})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
        })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="center-elements top-margin border-box padding-left">
                <h2>{items.title}</h2>
                {items.status == 1 &&
                    <p className="project-status"><i>On going</i> | Date created: {items.date_created} | Goal date: {items.date_goal}</p>
                }
                {items.status == 2 &&
                    <p className="project-status"><i>Completed</i> | Date created: {items.date_created} | Goal date: {items.date_goal}</p>
                }
                <p>{items.description}</p>
                Goal Amount: <strong>{items.amount_goal} eth</strong> | Fund Raised: <strong>{items.amount_funded} eth</strong>
                {items.status == 1 &&
                  <form onSubmit={this.onSubmit}>
                    <div className="center-elements top-margin">
                        <div>
                            <label>
                            amount: 
                            <input type="text" name="amount" id="amount" required pattern="^\d+(?:\.\d{1,2})?$"/>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>}
            </div>
          );
        }
    }
}
export default FundPage;
