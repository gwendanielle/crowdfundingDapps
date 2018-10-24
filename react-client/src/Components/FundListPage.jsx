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
            <div>
                <div className="bodyDiv">
                    <h2 className="header-font">Let's make the world a better place, shall we?</h2>
                    <h5 className="body-font">Here's a list of projects you might be able to help...</h5>
                    <ul style={{marginTop: "45px", padding: "0px"}}>
                      {items.map(item => (
                        <li className="fund-listing" key={item.title}>
                          <Link to={"/fund/" + item.id}><h3>{item.title}</h3></Link>
                          <p className="project-status">
                          {item.status == 1 &&
                            <span style={{color: "blue", marginRight: "10px"}}>On going</span>
                          }
                          {item.status == 2 &&
                            <span style={{color: "green", marginRight: "10px"}}>Completed</span> 
                          }
                          {item.status == 3 &&
                            <span style={{color: "red", marginRight: "10px"}}>Ended</span> 
                          }
                           | asking for {item.amount_goal} ETH (~{item.amount_goal * 22500} 円) until {item.date_goal}
                          </p>
                          <Link to={"/fund/" + item.id}>- Click for more details -</Link>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
          );
        }
    }
}
export default FundListPage;
