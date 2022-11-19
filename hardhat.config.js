//require("@nomiclabs/hardhat-waffle");
//require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: "hardhat",    
	networks: {
		hardhat: {
			chainId: 31337,
			// gasPrice: 130000000000,
		},
		goerli: {
			url: process.env.RPC_URL,
			accounts: [process.env.PRIVATE_KEY],
			chainId: 5,
			blockConfirmations: 6,
		},
	},
	solidity: {
		compilers: [
			{
				version: "0.8.17",
			},
			{
				version: "0.6.6",
			},
		],
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY, // if we want to veryfy our deployment we have to use this key, hardhat-etherscan required
	},
	
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
			1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
		},
	},
	mocha: {
		timeout: 500000,
	},
};
