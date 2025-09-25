import ThemeToggle from "./themeToggle";

const Footer = () => {
	return (
		<div className="flex items-center justify-end gap-6">
			<p className="text-[1.75rem] font-extralight">en-US</p>
			<ThemeToggle />
		</div>
	);
};

export default Footer;
