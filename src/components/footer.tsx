import GoBackButton from "./goBackButton";
import LanguageSwitcher from "./languageSwitcher";
import MobileFooter from "./mobileFooter";
import ThemeToggle from "./themeToggle";

const Footer = () => {
	return (
		<>
			<div className="w-long flex items-center justify-between gap-6 self-center max-phone:hidden">
				<GoBackButton />

				<div className="flex gap-3">
					<LanguageSwitcher />
					<ThemeToggle />
				</div>
			</div>

			<MobileFooter />
		</>
	);
};

export default Footer;
