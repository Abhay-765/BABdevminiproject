import Web3 from 'web3'; 

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 

var fundABI = [{"constant":true,"inputs":[],"name":"organization","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_organization_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_donor","type":"address"}],"name":"get_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_donors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_donor","type":"address"}],"name":"get_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"donors","outputs":[{"name":"name","type":"string"},{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}] 

var fundAddress = '0x2f63d34a051010faad85f5b94b18f03c940c74a4';

const fundContract = web3.eth.contract(fundABI).at(fundAddress); 

export {fundContract}; 