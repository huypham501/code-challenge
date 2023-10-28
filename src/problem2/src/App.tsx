import React from "react";
import logo from "./logo.svg";

function App() {
	return (
		<div className="App">
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
