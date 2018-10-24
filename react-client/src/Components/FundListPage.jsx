import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const API = 'http://fundeth.localtunnel.me/api/projects/';

class FundListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
    componentDidMount() {
        fetch(API)
          .then(res => {
              return res.json();
          })
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            
            (error) => {
              alert(error)
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }
    
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.title}>
                  <Link to={"/fund/" + item.id}><h3>{item.title}</h3></Link>
                  {item.status == 1 &&
                    <p className="project-status"><i>On going</i> | goal amount: {item.amount_goal} | goal date: {item.date_goal}</p>
                  }
                  {item.status == 2 &&
                    <p className="project-status"><i>Completed</i> | goal amount: {item.amount_goal} | goal date: {item.date_goal}</p>
                  }
                  <Link to={"/fund/" + item.id}>show details</Link>
                </li>
              ))}
            </ul>
          );
        }
    }
}
export default FundListPage;
