import { TCurrency, objectCurrencyData } from "../util/settings";

export type TAmountCrypt = {
	currency: TCurrency;
	amount: number;
};

export const useConvert = (fromAmount: TAmountCrypt, toAmount: TAmountCrypt) => {
	return fromAmount.amount / objectCurrencyData[toAmount.currency].price;
};
