import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	icon: String,
	alt: String,
	category: String,
	order: Number,
});

export default mongoose.models.Skill || mongoose.model("Skill", skillSchema);
