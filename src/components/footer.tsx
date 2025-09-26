import LanguageSwitcher from "./languageSwitcher";
import ThemeToggle from "./themeToggle";

const Footer = () => {
	return (
		<div className="flex items-center justify-end gap-6">
			<LanguageSwitcher />
			<ThemeToggle />
		</div>
	);
};

export default Footer;
