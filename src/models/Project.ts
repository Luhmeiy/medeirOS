import mongoose from "mongoose";
import "./Badge.ts";

const projectSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.UUID,
		required: true,
	},
	title: String,
	bg_color: String,
	github: String,
	preview: String,
	translations: {
		en: {
			summary: String,
			text: String,
		},
		pt: {
			summary: String,
			text: String,
		},
	},
	badges: [
		{
			type: String,
			ref: "Badge",
		},
	],
});

export default mongoose.models.Project ||
	mongoose.model("Project", projectSchema);
