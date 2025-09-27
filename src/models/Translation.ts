import mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
	},
	Header: { title: String },
	HomePage: {
		about: {
			title: String,
			text: String,
		},
		projects: {
			title: String,
			button: String,
		},
		social: {
			title: String,
			text: String,
			button: String,
		},
	},
	Footer: {
		languages: {
			en: String,
			pt: String,
		},
	},
});

export default mongoose.models.Translation ||
	mongoose.model("Translation", translationSchema);
