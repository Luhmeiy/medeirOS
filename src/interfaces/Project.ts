export interface IProject {
	_id: string;
	title: string;
	bg_color: string;
	github: string;
	preview: string;
	thumbnail: string;
	translations: {
		[key in "en" | "pt"]: {
			summary: string;
			text: string;
		};
	};
	badges: {
		alt: string;
		url: string;
	}[];
}
