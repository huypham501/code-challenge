// 1. This function acts as a utility function
// So it shouldn't be inside the component, which would be re-rendered following the component - unnecessary - performance issue
// 2. Following the case, I will alter this function take "string" instead of "any"
export const getPriority = (blockchainName: string): number => {
	switch (blockchainName) {
		case "Osmosis":
			return 100;
		case "Ethereum":
			return 50;
		case "Arbitrum":
			return 30;
		case "Zilliqa":
			return 20;
		case "Neo":
			return 20;
		default:
			return -99;
	}
};