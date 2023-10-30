import { TCurrency, objectCurrencyData } from "./settings";

export const getPriceCurrency = (nameCurrency: TCurrency) => {
    return objectCurrencyData[nameCurrency].price;
};
