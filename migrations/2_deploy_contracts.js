var treespaceContract = artifacts.require("./TreespaceProfile.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(treespaceContract, {from: accounts[0]});
};
