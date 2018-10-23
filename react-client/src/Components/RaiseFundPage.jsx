import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://samu.localtunnel.me/api/projects/';

class RaiseFundPage extends Component {
    
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            amount_goal: '',
            date_goal: '',
            creator_address: '',
            category: 1
        };
    }

    onSubmit(e){
        e.preventDefault();
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let amount_goal = document.getElementById('amount_goal').value;
        let date_goal = document.getElementById('date_goal').value;
        let creator_address = document.getElementById('creator_address').value;

        fetch(API, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                  
            },
            body:JSON.stringify({title:title, category:1, description:description, amount_goal:amount_goal, date_goal:date_goal, creator_address, creator_address})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
    }

    render() {
        const { title, description, amount_goal, date_goal, creator_address } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="center-elements top-margin">
                    <div>
                        <label>
                        title: 
                        <input type="text" name="title" id="title"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            description: 
                            <textarea name="description" id="description" />
                        </label>
                    </div>
                    <div>
                        <label>
                            goal amount: 
                            <input type="text" name="amount_goal" id="amount_goal" />
                        </label>
                    </div>
                    <div>
                        <label>
                            date_goal: 
                            <input type="text" name="date_goal" id="date_goal" />
                        </label>
                    </div>
                    <div>
                        <label>
                            wallet address:
                            <input type="text" name="creator_address" id="creator_address" />
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
export default RaiseFundPage;