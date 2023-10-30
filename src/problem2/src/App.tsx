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
		setRightAmoutCrypt((prev) => ({
			...prev,
			amount: (leftAmountCrypt.amount * priceOfLeft) / priceOfRight,
		}));
	};

	useEffect(() => {
		calculate();
	}, [leftAmountCrypt, rightAmountCrypt.currency]);

	// Swap logic
	const handleSwapClick = () => {
		const tempAmountCrypt = leftAmountCrypt;
		setLeftAmoutCrypt(rightAmountCrypt);
		setRightAmoutCrypt(tempAmountCrypt);
	};

	return (
		<div className="App">
			<h1 className="title">Swap currency</h1>
			<div className="swap-container">
				<InputForm
					{...leftAmountCrypt}
					isDisable={false}
					handleChangeValue={setLeftAmoutCrypt}
					className="input-left"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="swap-icon"
					onClick={handleSwapClick}>
					<path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
				</svg>
				<InputForm
					{...rightAmountCrypt}
					isDisable={true}
					handleChangeValue={setRightAmoutCrypt}
					className="input-right"
				/>
			</div>
			{/* <form>
				<label htmlFor="input-amount">Amount to send</label>
				<input id="input-amount" />

				<label htmlFor="output-amount">Amount to receive</label>
				<input id="output-amount" />

			</form> */}
		</div>
	);
}

export default App;
