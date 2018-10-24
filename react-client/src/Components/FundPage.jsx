import React, { Component } from 'react';

const API = 'http://fundeth.localtunnel.me/api/projects/details/?project=';
var paramID = 0;
var address = "asdfads";
class FundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: null,
          ContractInstance: this.props.contractInstance
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
      
    componentDidMount() {
      let id = this.props.id;
      paramID = id;
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
          fetch(API + paramID, {
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
                    <p className="project-status"><i>On going</i> | date created: {items.date_created}, goal date: {items.date_goal}</p>
                }
                {items.status == 2 &&
                    <p className="project-status"><i>Completed</i> | date created: {items.date_created}, goal date: {items.date_goal}</p>
                }
                <p>{items.description}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="center-elements top-margin">
                        <div>
                            <label>
                            amount: 
                            <input type="text" name="amount" id="amount"/>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
          );
        }
    }
}
export default FundPage;
