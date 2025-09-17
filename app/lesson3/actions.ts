"use server";

import { cookies } from "next/headers";

type Theme = "light-theme" | "dark-theme";

export async function setThemeCookie(theme: Theme) {
	const cookie = await cookies();
	await cookie.set("theme", theme, { path: "/" });
}
