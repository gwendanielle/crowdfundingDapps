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
            <form onSubmit={this.onSubmit}>
                <div className="center-elements top-margin">
                    <div>
                        <label>
                        title: 
                        <input type="text" name="title" id="title" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            description: 
                            <textarea name="description" id="description" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            goal amount(in eth): 
                            <input type="number" name="amount_goal" id="amount_goal" required pattern="^\d+(?:\.\d{1,2})?$"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            date_goal: 
                            <DatePicker dateFormat="YYYY-MM-DD" selected={this.state.startDate} onChange={this.handleChange} name="date_goal" id="date_goal" required/>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
export default RaiseFundPage;
