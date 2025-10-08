import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { portfolioAPI } from "@/lib/api";

export default getRequestConfig(async () => {
	const store = await cookies();
	const locale = store.get("locale")?.value || "en";

	return await portfolioAPI.getTranslations(locale);
});
