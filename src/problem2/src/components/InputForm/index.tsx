import { Dispatch, useEffect, useRef, useState } from "react";
import { TCurrency, listCurrencyFrequentUse, listCurrencyNotFrequentUse } from "../../util/settings";
import { TAmountCrypt } from "../../hooks/useConvert";
import { useDebounceEffect } from "../../hooks/useDebounce";
import { ExtendClassName } from "../../util/types";
import { getPriceCurrency } from "../../util/utils";
import { useSVGIcon } from "../../hooks/useSVGIcon";

type TInputForm = TAmountCrypt &
	ExtendClassName & {
		isDisable: boolean;
		handleChangeValue: Dispatch<React.SetStateAction<TAmountCrypt>>;
	};

export const InputForm = ({
	isDisable, //
	handleChangeValue,
	className,
	amount,
	currency,
}: TInputForm) => {
	// Input field logic
	const ref_input = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (!ref_input.current) {
			return;
		}
		ref_input.current.value = amount.toString();
	}, [amount]);

	// Logic update icon of currency
	const { icon } = useSVGIcon(currency);

	// More option portal logic
	const ref_moreOptionPortal = useRef<HTMLUListElement>(null);
	const ref_moreOptionButton = useRef<HTMLButtonElement>(null);
	const [isExpandMoreOptions, setIsExpandMoreOptions] = useState<boolean>(false);

	const handleMoreOptionsButton = () => {
		if (isExpandMoreOptions) {
			setIsExpandMoreOptions(false);
			return;
		}
		setIsExpandMoreOptions(true);
		document.addEventListener("mousedown", handleClickOutside);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (ref_moreOptionPortal.current && ref_moreOptionPortal.current.contains(event.target as Node)) {
			return;
		}
		if (ref_moreOptionButton.current && ref_moreOptionButton.current.contains(event.target as Node)) {
			return;
		}
		setIsExpandMoreOptions(false);
		document.removeEventListener("mousedown", handleClickOutside);
	};

	// List logic
	const [selectedCurrency, setSelectedCurrency] = useState<TCurrency>(currency);
	const [listOptionsDisplay, setListOptionsDisplay] = useState<TCurrency[]>(listCurrencyFrequentUse);
	const [listOptionsCollapsed, setListOptionsCollapsed] = useState<TCurrency[]>(listCurrencyNotFrequentUse);

	const selectCurrencyFromMoreOption = (event: React.MouseEvent<HTMLElement>) => {
		const _selectedCurrency = event.currentTarget.textContent as TCurrency;
		setSelectedCurrency(_selectedCurrency);
		const lastOptionInDisplay = listOptionsDisplay[listOptionsDisplay.length - 1];

		listOptionsDisplay.pop();
		listOptionsDisplay.unshift(_selectedCurrency);
		setListOptionsDisplay(listOptionsDisplay);

		handleMoreOptionsButton();

		const listOptionsCollapsedTemp = listOptionsCollapsed.filter((item) => item !== selectedCurrency);
		listOptionsCollapsedTemp.unshift(lastOptionInDisplay);
		setListOptionsCollapsed(listOptionsCollapsedTemp);
	};

	const selectCurrencyFormListDisplay = (event: React.MouseEvent<HTMLElement>) => {
		const _selectedCurrency = event.currentTarget.textContent as TCurrency;
		setSelectedCurrency(_selectedCurrency);
	};

	// Handle change logic
	useEffect(() => {
		handleChangeValue((prev) => ({
			...prev,
			currency: selectedCurrency,
		}));
	}, [selectedCurrency]);

	const [input, setInput] = useState<number>(0);
	useDebounceEffect(
		() => {
			handleChangeValue((prev) => ({
				...prev, //
				amount: input,
			}));
		},
		[input],
		300,
	);

	// Clear "0" on click
	useEffect(() => {
		if (!ref_input.current) {
			return;
		}
		ref_input.current.addEventListener("focus", handleFocusInputField);
		ref_input.current.addEventListener("focusout", handleFocusOutInputField);
	}, []);

	const handleFocusInputField = () => {
		if (!ref_input.current || ref_input.current.value !== "0") {
			return;
		}
		ref_input.current.value = "";
	};

	const handleFocusOutInputField = () => {
		if (!ref_input.current || ref_input.current.value !== "") {
			return;
		}
		ref_input.current.value = "0";
	};

	return (
		<div className={`input-form-container ${className ? className : ""}`}>
			<div className="switch-currency-container">
				<ul className="list-frequent-currency">
					{listOptionsDisplay.map((item) => (
						<li
							key={item}
							className={`item ${selectedCurrency === item ? "active" : ""}`}
							onClick={selectCurrencyFormListDisplay}>
							{item}
						</li>
					))}
					<button
						id="more-options-button"
						className="item more-options"
						onClick={handleMoreOptionsButton}
						ref={ref_moreOptionButton}>
						<svg
							viewBox="0 0 20 20"
							width="1em"
							height="1em"
							className={`arrow-icon ${isExpandMoreOptions ? "active" : ""}`}>
							<path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
						</svg>
					</button>
				</ul>
				{isExpandMoreOptions && (
					<ul
						className="list-more-option"
						ref={ref_moreOptionPortal}>
						{listOptionsCollapsed.map((item) => (
							<li
								key={item}
								className="item"
								onClick={selectCurrencyFromMoreOption}>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="input-field-container">
				<input
					type="number"
					className={`amount-input ${isDisable ? "disable" : ""}`}
					disabled={isDisable}
					ref={ref_input}
					onChange={(event) => setInput(parseInt(event.currentTarget.value))}
				/>
				<img
					src={icon}
					alt={`${currency}.svg`}
					className="currency-icon"
				/>
				<div className="rate-price">{currency !== "USD" ? `1 ${currency} = ${getPriceCurrency(currency)} USD` : ""}</div>
			</div>
		</div>
	);
};
