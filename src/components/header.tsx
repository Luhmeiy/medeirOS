import { useLocale, useTranslations } from "next-intl";

const Header = () => {
	const locale = useLocale();
	const t = useTranslations("Header");

	const date = new Date().toLocaleDateString(locale, {
		hour: "2-digit",
		minute: "2-digit",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	const time = date.split(",").reverse().join(" - ");

	return (
		<div className="flex justify-between text-[1.75rem] font-extralight">
			<p>
				{t.rich("title", {
					span: (chunks) => (
						<span className="font-black">{chunks}</span>
					),
				})}
			</p>
			<p>{time}</p>
		</div>
	);
};

export default Header;
