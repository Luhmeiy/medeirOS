import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

export async function GET() {
	try {
		await dbConnect();

		const projects = await Project.find().sort("order").populate("badges");

		return Response.json(projects);
	} catch (error) {
		return Response.json(
			{ error: `Error fetching projects: ${error}` },
			{ status: 500 }
		);
	}
}
