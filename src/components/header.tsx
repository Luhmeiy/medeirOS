const Header = () => {
	const date = new Date().toLocaleDateString("pt-BR", {
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
				Hi, I'm medeir<span className="font-black">OS</span>
			</p>
			<p>{time}</p>
		</div>
	);
};

export default Header;
