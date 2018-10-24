import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const API = 'http://fundeth.localtunnel.me/api/projects/';

class RaiseFundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            amount_goal: '',
            date_goal: '',
            creator_address: '',
            category: 1,
            startDate: moment(),
            ContractInstance: this.props.contractInstance
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(date) {
        this.setState({
          startDate: date
        });
    }

    onSubmit(e) {
        // e.preventDefault();
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let amount_goal = document.getElementById('amount_goal').value;
        let date_goal = document.getElementById('date_goal').value;
        let goalValue = web3.toBigNumber(web3.toWei(parseFloat(amount_goal), 'ether'));


        this.props.contractInstance.addProject(goalValue, {
            gas: 300000,
            from: web3.eth.accounts[0],
        }, (err, result) => {
            if (!err) {
                fetch(API, {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        title:title,
                        category: 1,
                        description: description,
                        amount_goal: amount_goal,
                        date_goal: date_goal,
                        creator_address: web3.eth.accounts[0]
                    })
                }).then((res) => res.json())
                .then((data) =>  console.log(data))
                .catch((err)=> alert(err))
            } else {
                alert(err)
            }
        });
    }

    render() {
        const { title, description, amount_goal, date_goal, creator_address } = this.state;
        return(
            <div>
                <div className="bodyDiv">
                    <h2 className="header-font">Your project's success begins here...</h2>
                    <h5 className="body-font">Write as much information as possible so people are more likely to fund you!</h5>
                    <div className="formDiv">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-field">
                                <p>Title:</p>
                                <input type="text" name="title" id="title" required/>
                            </div>
                            <div className="form-field">
                                <p>Description:</p>
                                <textarea name="description" id="description" required/>
                            </div>
                            <div className="form-field">
                                <p>Goal amount (in ETH):</p>
                                <input type="text" name="amount_goal" id="amount_goal" required pattern="^\d+(?:\.\d{1,2})?$"/>
                            </div>
                            <div className="form-field">
                                <p>Date goal:</p>
                                <DatePicker dateFormat="YYYY-MM-DD" selected={this.state.startDate} onChange={this.handleChange} name="date_goal" id="date_goal" required/>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default RaiseFundPage;
