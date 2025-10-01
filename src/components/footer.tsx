import GoBackButton from "./goBackButton";
import LanguageSwitcher from "./languageSwitcher";
import ThemeToggle from "./themeToggle";

const Footer = () => {
	return (
		<div className="w-long flex items-center justify-between gap-6 self-center">
			<GoBackButton />

			<div className="flex gap-6">
				<LanguageSwitcher />
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Footer;
