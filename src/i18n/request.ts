import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import dbConnect from "@/lib/dbConnect";
import Translation from "@/models/Translation";

export default getRequestConfig(async () => {
	const store = await cookies();
	const locale = store.get("locale")?.value || "en";

	try {
		await dbConnect();

		const messages = await Translation.findById(locale);

		return {
			locale,
			messages: messages.toObject(),
		};
	} catch (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
});
