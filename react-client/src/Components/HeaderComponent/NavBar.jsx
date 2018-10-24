import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header id="header">
        <div className="content">
          <div id="logo"><a href="/">EthFund</a></div>
          <nav id="nav">
            <ul>
              <li><Link to="/fundlist" className="header-font">Fund projects</Link></li>
              <li><Link to="/raisefund" className="header-font">Start fundraising</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
export default NavBar;
