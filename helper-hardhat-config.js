const networkConfig = {
	5: {
		name: "goerli",
		
	},
	31337: {
		name: "localhost",
		
	},
};

const developmentChains = ["hardhat", "localhost"];
const initialAmount = 100000;

module.exports = {
	networkConfig,
	developmentChains,
	initialAmount
};
