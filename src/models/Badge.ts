import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
	},
	alt: String,
	url: String,
});

export default mongoose.models.Badge || mongoose.model("Badge", badgeSchema);
