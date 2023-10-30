import { useEffect, useState } from "react";
import { InputForm } from "./components";
import { TAmountCrypt } from "./hooks/useConvert";
import { getPriceCurrency } from "./util/utils";

function App() {
	const [leftAmountCrypt, setLeftAmoutCrypt] = useState<TAmountCrypt>({
		amount: 0,
		currency: "USD",
	});

	const [rightAmountCrypt, setRightAmoutCrypt] = useState<TAmountCrypt>({
		amount: 0,
		currency: "ETH",
	});

	const calculate = () => {
		const priceOfLeft = getPriceCurrency(leftAmountCrypt.currency);
		const priceOfRight = getPriceCurrency(rightAmountCrypt.currency);
		setRightAmoutCrypt(prev => ({
			...prev,
			amount: (leftAmountCrypt.amount * priceOfLeft) / priceOfRight,
		}));
	};

	useEffect(() => {
		calculate();
	}, [leftAmountCrypt, rightAmountCrypt.currency]);

	return (
		<div className="App">
			<InputForm
				{...leftAmountCrypt}
				isDisable={false}
				handleChangeValue={setLeftAmoutCrypt}
			/>
			<InputForm
				{...rightAmountCrypt}
				isDisable={true}
				handleChangeValue={setRightAmoutCrypt}
			/>
			<form>
				<h5>Swap</h5>
				<label htmlFor="input-amount">Amount to send</label>
				<input id="input-amount" />

				<label htmlFor="output-amount">Amount to receive</label>
				<input id="output-amount" />

				<button>CONFIRM SWAP</button>
			</form>
		</div>
	);
}

export default App;
