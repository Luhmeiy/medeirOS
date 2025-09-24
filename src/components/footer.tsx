import { SunIcon } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
	return (
		<div className="flex items-center justify-end gap-6">
			<p className="text-[1.75rem] font-extralight">en-US</p>
			<SunIcon size={28} weight="bold" />
		</div>
	);
};

export default Footer;
