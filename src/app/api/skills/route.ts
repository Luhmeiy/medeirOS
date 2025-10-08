import dbConnect from "@/lib/dbConnect";
import Skill from "@/models/Skill";

export async function GET() {
	try {
		await dbConnect();

		const skills = await Skill.find();

		const categories = Object.entries(
			Object.groupBy(skills, (skill) => skill.category)
		).map(([category, skills]) => ({
			title: category.charAt(0).toUpperCase() + category.slice(1),
			skills,
		}));

		return Response.json({ categories, skills });
	} catch (error) {
		return Response.json(
			{ error: `Error fetching skills: ${error}` },
			{ status: 500 }
		);
	}
}
