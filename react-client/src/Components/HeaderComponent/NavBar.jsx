import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="nav-header">
          <div className="logo">
            <a href="/" className="header-font header-link">EthFund</a>
          </div>
          <div className="header-right">
            <Link to="/fundlist" className="header-font">Fund</Link>
            <Link to="/raisefund" className="header-font">Make a fund raise</Link>
          </div>
        </div>
      </header>
    )
  }
}
export default NavBar;
