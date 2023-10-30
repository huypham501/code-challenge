export type TCurrency =
	| "BLUR" //
	| "bNEO"
	| "BUSD"
	| "BUSD"
	| "USD"
	| "ETH"
	| "GMX"
	| "STEVMOS"
	| "LUNA"
	| "RATOM"
	| "STRD"
	| "EVMOS"
	| "IBCX"
	| "IRIS"
	| "ampLUNA"
	| "KUJI"
	| "STOSMO"
	| "USDC"
	| "axlUSDC"
	| "ATOM"
	| "STATOM"
	| "OSMO"
	| "rSWTH"
	| "STLUNA"
	| "LSI"
	| "OKB"
	| "OKT"
	| "SWTH"
	| "USC"
	| "USDC"
	| "USDC"
	| "USDC"
	| "WBTC"
	| "wstETH"
	| "YieldUSD"
	| "ZIL";

type TCurrencyData = Record<
	TCurrency,
	{
		currency: TCurrency;
		date: string;
		price: number;
	}
>;

export const objectCurrencyData: TCurrencyData = {
	BLUR: {
		currency: "BLUR",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.20811525423728813,
	},
	bNEO: {
		currency: "bNEO",
		date: "2023-08-29T07:10:50.000Z",
		price: 7.1282679,
	},
	BUSD: {
		currency: "BUSD",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.9998782611186441,
	},
	USD: {
		currency: "USD",
		date: "2023-08-29T07:10:30.000Z",
		price: 1,
	},
	ETH: {
		currency: "ETH",
		date: "2023-08-29T07:10:52.000Z",
		price: 1645.9337373737374,
	},
	GMX: {
		currency: "GMX",
		date: "2023-08-29T07:10:40.000Z",
		price: 36.345114372881355,
	},
	STEVMOS: {
		currency: "STEVMOS",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.07276706779661017,
	},
	LUNA: {
		currency: "LUNA",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.40955638983050846,
	},
	RATOM: {
		currency: "RATOM",
		date: "2023-08-29T07:10:40.000Z",
		price: 10.250918915254237,
	},
	STRD: {
		currency: "STRD",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.7386553389830508,
	},
	EVMOS: {
		currency: "EVMOS",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.06246181355932203,
	},
	IBCX: {
		currency: "IBCX",
		date: "2023-08-29T07:10:40.000Z",
		price: 41.26811355932203,
	},
	IRIS: {
		currency: "IRIS",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.0177095593220339,
	},
	ampLUNA: {
		currency: "ampLUNA",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.49548589830508477,
	},
	KUJI: {
		currency: "KUJI",
		date: "2023-08-29T07:10:45.000Z",
		price: 0.675,
	},
	STOSMO: {
		currency: "STOSMO",
		date: "2023-08-29T07:10:45.000Z",
		price: 0.431318,
	},
	axlUSDC: {
		currency: "axlUSDC",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.989832,
	},
	ATOM: {
		currency: "ATOM",
		date: "2023-08-29T07:10:50.000Z",
		price: 7.186657333333334,
	},
	STATOM: {
		currency: "STATOM",
		date: "2023-08-29T07:10:45.000Z",
		price: 8.512162050847458,
	},
	OSMO: {
		currency: "OSMO",
		date: "2023-08-29T07:10:50.000Z",
		price: 0.3772974333333333,
	},
	rSWTH: {
		currency: "rSWTH",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.00408771,
	},
	STLUNA: {
		currency: "STLUNA",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.44232210169491526,
	},
	LSI: {
		currency: "LSI",
		date: "2023-08-29T07:10:50.000Z",
		price: 67.69661525423729,
	},
	OKB: {
		currency: "OKB",
		date: "2023-08-29T07:10:40.000Z",
		price: 42.97562059322034,
	},
	OKT: {
		currency: "OKT",
		date: "2023-08-29T07:10:40.000Z",
		price: 13.561577966101694,
	},
	SWTH: {
		currency: "SWTH",
		date: "2023-08-29T07:10:45.000Z",
		price: 0.004039850455012084,
	},
	USC: {
		currency: "USC",
		date: "2023-08-29T07:10:40.000Z",
		price: 0.994,
	},

	USDC: {
		currency: "USDC",
		date: "2023-08-29T07:10:30.000Z",
		price: 1,
	},

	WBTC: {
		currency: "WBTC",
		date: "2023-08-29T07:10:52.000Z",
		price: 26002.82202020202,
	},
	wstETH: {
		currency: "wstETH",
		date: "2023-08-29T07:10:40.000Z",
		price: 1872.2579742372882,
	},
	YieldUSD: {
		currency: "YieldUSD",
		date: "2023-08-29T07:10:40.000Z",
		price: 1.0290847966101695,
	},
	ZIL: {
		currency: "ZIL",
		date: "2023-08-29T07:10:50.000Z",
		price: 0.01651813559322034,
	},
};

export const listCurrency: TCurrency[] = Object.keys(objectCurrencyData) as TCurrency[];

export const listCurrencyFrequentUse: TCurrency[] = [
	"USD", //
	"ETH",
	"USDC",
	"ATOM",
	"LUNA",
];

export const listCurrencyNotFrequentUse = listCurrency.filter((item) => !listCurrencyFrequentUse.includes(item));
