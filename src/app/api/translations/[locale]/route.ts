import dbConnect from "@/lib/dbConnect";
import Translation from "@/models/Translation";

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ locale: string }> }
) {
	const { locale } = await params;

	try {
		await dbConnect();

		const messages = await Translation.findById(locale);

		return Response.json({
			locale,
			messages: messages.toObject(),
		});
	} catch (error) {
		return Response.json(
			{ error: `Error fetching translation: ${error}` },
			{ status: 500 }
		);
	}
}
