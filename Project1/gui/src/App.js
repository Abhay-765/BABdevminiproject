import Web3 from 'web3'; 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {fundContract} from './EthereumSetup';
var fundABI = [{"constant":true,"inputs":[],"name":"organization","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_organization_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_donor","type":"address"}],"name":"get_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_donors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_donor","type":"address"}],"name":"get_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"donors","outputs":[{"name":"name","type":"string"},{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}] 
var fundAddress = '0x2f63d34a051010faad85f5b94b18f03c940c74a4';
const fundContract = window.web3.eth.contract(fundABI).at(fundAddress);


class App extends Component { 
  
  constructor(props) {
    super(props)
    this.state = {
      organization: '',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendTransaction = this.sendTransaction.bind(this); 
  }


 /*
  if (typeof window.web3 === 'undefined') {
    // no web3, use fallback
    console.error("Please use a web3 browser");
  } */

  
  
  /*if(typeof web3 != 'undefined'){
         console.log("Using web3 detected from external source like Metamask")
         this.web3 = new Web3(web3.currentProvider)
      }else{
         console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
         this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  }*/

  componentWillMount() {

    var data = "bab fundraiser"//fundContract.get_organization_name(); 
    console.log(data);
    this.setState((prevState) => {
    return {organization: data};
}); 
  }

  sendTransaction() {
    /*
    window.web3.sendTransaction({to: '0x2f63d34a051010faad85f5b94b18f03c940c74a4', 
    value: window.web3.toWei(1, 'ether') 
    })*/
  
    fundContract.donate(this.state.value, {
      gas: 300000,
      from: window.web3.eth.accounts[0], 
      value: window.web3.toWei(1, 'ether'), 
      }, (err, result) => {
   // Result is the transaction address of that function
    }) 
    
    /*console.log(window.web3.eth.accounts[0]); 
   window.web3.eth.getAccounts(function(error, accounts) {
      console.log(accounts[0])
    })*/


    
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <p>
          Donate money to support {this.state.organization}!  
        </p>
        <button onClick= {this.sendTransaction}>
          Donate
        </button>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
 
    );
  }
}

export default App;
