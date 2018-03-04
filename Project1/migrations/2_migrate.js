var fund = artifacts.require("./fund.sol");

module.exports = function(deployer) {
  deployer.deploy(fund, "shitty scam");
};
