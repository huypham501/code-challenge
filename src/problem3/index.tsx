// I prefer to use "type" instead of "interface"
// Because "interface" is allows us to add more properties in the type in the future
// Which not strict and not suitable to use in this case as a prop's type.
import { PropsWithChildren, useMemo } from "react";
// Dummy import limit error visual
import { getPriority } from "./utils";

type WalletBalance = {
	// Because "currency" is limited and can be per-implement, so, to increase strictly
	// I would prefer to implement like:
	// currency: "Osmosis" | "Ethereum" | "Arbitrum" | "Zilliqa" | "Neo"
	currency: string;
	amount: number;
	// Add to satisfy logic code
	blockchain: string;
};

type FormattedWalletBalance = {
	formatted: string;
} & WalletBalance;

// Dummy type
type BoxProps = {};

const useWalletBalances = (): WalletBalance[] => {
	return [];
};

// Because of this calculation segment
// const usdValue = prices[balance.currency] * balance.amount;
// I assume this hook return an array of object like below
// Example of an object: { currency: "Ethereum", priceInUSD: 1,784.84 }
const usePrices = (): (Pick<WalletBalance, "currency"> & {
	priceInUSD: number;
})[] => {
	return [];
};

// Because of the assumtion above, I'd implement the function to get priceInUSD following the currency
const getPriceByCurrency = (prices: ReturnType<typeof usePrices>, currency: WalletBalance["currency"]) => {
	let object = prices.find((obj) => obj.currency === currency);
	if (!object) {
		return 0;
	}
	return object.priceInUSD;
};

// React.FC is unnecessary and limited the expansion of the functional component
// In order to use children in this case, I'll propose to use PropsWithChildren from "react"
// In detail https://github.com/facebook/create-react-app/pull/8177
const WalletPage = ({ children, ...rest }: PropsWithChildren<BoxProps>) => {
	const balances = useWalletBalances();
	const prices = usePrices();

	const rows: TWalletRow[] = useMemo(() => {
		const sortedBalances = balances
			// Remove parameter's type WalletBalance because typescript have shown it for us
			.filter((balance) => {
				const balancePriority = getPriority(balance.blockchain);
				// Change "lhsPriority" to "balancePriority"
				// And shorten condition with "&&" operator
				if (balancePriority > -99 && balance.amount <= 0) {
					return true;
				}
				return false;
			})
			// Remove parameter's type WalletBalance because typescript have shown it for us
			.sort((lhs, rhs) => {
				const leftPriority = getPriority(lhs.blockchain);
				const rightPriority = getPriority(rhs.blockchain);
				if (leftPriority > rightPriority) {
					return -1;
				}
				// Here not decide how to deal when rightPriority = leftPriority
				// So I'll implement when rightPriority = leftPriority as same as rightPriority > leftPriority
				return 1;
			});

		// This part calculate is relate to this logic block
		const formattedBalances = sortedBalances.map((balance: WalletBalance): FormattedWalletBalance => {
			return {
				...balance,
				formatted: balance.amount.toFixed(),
			};
		});

		// This part calculate is relate to this logic block too
		// Fix "sortedBalances" to "formattedBalances"
		// Remove "index" , due to what I explain next
		return formattedBalances.map((balance: FormattedWalletBalance): TWalletRow => {
			const priceInUSD = getPriceByCurrency(prices, balance.currency);
			const usdValue = priceInUSD * balance.amount;

			return {
				...balance,
				usdValue,
			};
		});
	}, [balances, prices]);

	return (
		<div {...rest}>
			{/* Render list of item here. Let the shallow compare job to React */}
			{/* I'll use some "meaning" to be a key like "currency" instead of "index"
          Because React render list depend of item key, and use number "index" of array as a key maybe cause potential error */}
			{rows.map((row) => (
				<WalletRow
					{...row}
					key={row.currency}
				/>
			))}
		</div>
	);
};

// Create dummy WalletRow
type TWalletRow = Pick<FormattedWalletBalance, "amount" | "formatted" | "currency"> & {
	className?: string;
	usdValue: number;
};

const WalletRow = (props: TWalletRow) => {
	return <></>;
};
