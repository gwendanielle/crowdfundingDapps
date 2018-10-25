import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import FundPage from './FundPage';
import RaiseFundPage from './RaiseFundPage';
import FundListPage from './FundListPage'
import NavBar from './HeaderComponent/NavBar';
import contract from '../contract/contract.js';

class App extends Component {
  constructor(props) {
    super(props);
    // web3 initialization and setup
    if (typeof web3 != 'undefined') {
      console.log("Using web3 detected from external source like MetaMask");
      this.web3 = new Web3(web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    }
    const MyContract = web3.eth.contract(contract);
    this.state = {
      ContractInstance: MyContract.at("0x124329c6d0dff906cb0c1875efefe1d79c7eb686")
    };
  }
  
  // Render the navigation and handles the routing of pages
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="app-container">
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="fund" path="/fund/:id" component={(props)=><FundPage id={props.match.params.id} contractInstance={this.state.ContractInstance} props/>} />
              <Route name="fundlist" exact path="/fundlist" component={FundListPage} />
              <Route name="raisefund" exact path="/raisefund" component={()=><RaiseFundPage contractInstance={this.state.ContractInstance}/>} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
