import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import FundPage from './FundPage';
import RaiseFundPage from './RaiseFundPage';
import FundListPage from './FundListPage'
import NavBar from './HeaderComponent/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="fund" path="/fund/:id" component={FundPage} />
          <Route name="fundlist" exact path="/fundlist" component={FundListPage} />
          <Route name="raisefund" exact path="/raisefund" component={RaiseFundPage} />
        </div>
      </Router>
    )
  }
}
export default App;