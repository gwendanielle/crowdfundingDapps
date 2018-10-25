import React, { Component } from 'react';

const API = 'http://ethfunddd.localtunnel.me/api/projects/details/?project=';
var address = "address";

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
    
    // GET fund project details
    componentDidMount() {
      let id = this.state.id;

      /**
        * fetch fund details
        *
        * @param {string} id
        * @method GET
        */ 
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
          /**
          * fund the project
          *
          * @param {string} id
          * @method POST
          */ 
          fetch(API + this.state.id, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                  
            },
            body:JSON.stringify({amount:amount})
            }).then((res) => res.json())
            .then((data) =>  {
              console.log(data);
              window.location = "/";
            })
            .catch((err)=>console.log(err))
        })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const categoryMapping = ["", "Personal", "Education", "Community", "Health & Medicine", "Others"];

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
              <div className="bodyDiv">
                  <h2 className="header-font" style={{fontWeight: "900"}}>{items.title}</h2>
                  <h5 className="body-font">
                    <p className="project-status">
                    {items.status == 1 &&
                      <span style={{color: "blue", marginRight: "10px"}}>On going</span>
                    }
                    {items.status == 2 &&
                      <span style={{color: "green", marginRight: "10px"}}>Completed</span> 
                    }
                    {items.status == 3 &&
                      <span style={{color: "red", marginRight: "10px"}}>Ended</span> 
                    }
                     | {(items.amount_funded / items.amount_goal) * 100}% | {items.amount_funded} out of {items.amount_goal} ETH (~{items.amount_funded * 22500} out of ~{items.amount_goal * 22500} 円) funded | Goal date: {items.date_goal}
                    </p>
                  </h5>
                  <p>{categoryMapping[items.category]}</p>
                  <p className="body-font" style={{marginTop: "50px", fontSize: "18px"}}>{items.description}</p>
                  {items.status == 1 &&
                  <div className="formDiv">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-field">
                        <p>Amount in ETH (~22,500 円 / 1 ETH):</p>
                        <input style={{width: "25%"}} type="text" name="amount" id="amount" required pattern="^\d+(?:\.\d{1,2})?$"/>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                  </div>}
              </div>
            </div>
          );
        }
    }
}
export default FundPage;
