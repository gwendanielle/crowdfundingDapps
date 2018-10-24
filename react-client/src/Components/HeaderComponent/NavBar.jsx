import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="nav-header">
            <a href="/" className="logo">EthFund</a>
            <div className="header-right">
                <Link to="/fundlist">Fund</Link>
                <Link to="/raisefund">Make a fund raise</Link>
            </div>
        </div>
      </header>
    )
  }
}
export default NavBar;