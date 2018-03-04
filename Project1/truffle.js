module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	
	const HDWalletProvider = require("truffle-hdwallet-provider")

	networks: {
		developement: {
			host: "localhost", 
			port: 8545, 
			network_id: "*"
		}
	}
};
