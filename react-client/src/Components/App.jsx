import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import FundPage from './FundPage';
import RaiseFundPage from './RaiseFundPage';
import FundListPage from './FundListPage'
import NavBar from './HeaderComponent/NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    if (typeof web3 != 'undefined') {
      console.log("Using web3 detected from external source like MetaMask");
      this.web3 = new Web3(web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    }

    const MyContract = web3.eth.contract([
  {
    "constant": false,
    "inputs": [
      {
        "name": "_fundGoal",
        "type": "uint256"
      }
    ],
    "name": "addProject",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_project",
        "type": "address"
      }
    ],
    "name": "fund",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "projectExists",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "projectInfo",
    "outputs": [
      {
        "name": "fundGoal",
        "type": "uint256"
      },
      {
        "name": "currentFund",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }]);
    this.state = {
      ContractInstance: MyContract.at("0xda1442d2774d43d2316b3329f8238724891b009b")
    };
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="fund" path="/fund/:id" component={FundPage} />
          <Route name="fundlist" exact path="/fundlist" component={FundListPage} />
          <Route name="raisefund" exact path="/raisefund" render={()=><RaiseFundPage num="2" contractInstance={this.state.ContractInstance}/>} />
        </div>
      </Router>
    )
  }
}
export default App;
