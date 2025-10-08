import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	try {
		await dbConnect();

		const project = await Project.findById(id).populate("badges");

		return Response.json(project);
	} catch (error) {
		return Response.json(
			{ error: `Error fetching project: ${error}` },
			{ status: 500 }
		);
	}
}
