import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {
  render() {
    return (
        <div>
        <div id="slide1">
            <div className="content">
                <h1 className="logo">EthFund</h1>
                <div className="divider"></div>
                <h3 className="landing-body">Realizing dreams through blockchain technology</h3>
                <Link to="/raisefund"><button className="landing-button">Start fundraising</button></Link>
            </div>
        </div>
        <div id="slide2">
        </div>
        </div>
    )
  }
}
export default HomePage;
