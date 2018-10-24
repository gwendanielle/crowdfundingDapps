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
    "constant": true,
    "inputs": [],
    "name": "getProjectAddresses",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
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
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "projectAddresses",
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
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }
]);
    this.state = {
      ContractInstance: MyContract.at("0x124329c6d0dff906cb0c1875efefe1d79c7eb686")
    };
  }
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
