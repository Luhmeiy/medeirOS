import { useTranslations } from "next-intl";
import DateTimeDisplay from "./dateTimeDisplay";

const Header = () => {
	const t = useTranslations("Header");

	return (
		<div className="w-long flex justify-between max-phone:justify-center self-center text-[1.75rem] font-extralight">
			<p>
				{t.rich("title", {
					span: (chunks) => (
						<span className="font-black">{chunks}</span>
					),
				})}
			</p>
			<DateTimeDisplay />
		</div>
	);
};

export default Header;
