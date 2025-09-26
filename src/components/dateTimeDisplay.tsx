"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const DateTimeDisplay = () => {
	const locale = useLocale();
	const [dateTime, setDateTime] = useState("");

	useEffect(() => {
		const getDateTime = () => {
			const now = new Date().toLocaleDateString(locale, {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});

			return now.split(",").reverse().join(" - ");
		};

		setDateTime(getDateTime());

		const interval = setInterval(() => {
			setDateTime(getDateTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [locale]);

	return <p>{dateTime}</p>;
};

export default DateTimeDisplay;
