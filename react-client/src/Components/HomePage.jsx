import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {
  render() {
    return (
      <div className="center-elements top-margin">
        <Link to="/fundlist"><button className="center-elements">Fund</button></Link>
        <Link to="/raisefund"><button className="center-elements">Raise a Funding</button></Link>
      </div>
    )
  }
}
export default HomePage;