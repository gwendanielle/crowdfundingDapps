import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <div class="nav-header">
            <a href="#default" class="logo">EthFund</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Fund</a>
                <a href="#about">Make a fund raise</a>
            </div>
        </div>
      </header>
    )
  }
}
export default NavBar;