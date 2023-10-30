import { useEffect, useState } from "react";
import { TCurrency } from "../util/settings";

// Credit goes to Jaden Rose in https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript
export const useSVGIcon = (currencyName: TCurrency) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();
	const [icon, setIcon] = useState<string>("");

	useEffect(() => {
		const fetchIcon = async () => {
			try {
				const response = await import(`../assets/tokens-icons/${currencyName}.svg`);
				setIcon(response.default);
			} catch (err: unknown) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchIcon();
	}, [currencyName]);

	return {
		loading,
		error,
		icon,
	};
};
