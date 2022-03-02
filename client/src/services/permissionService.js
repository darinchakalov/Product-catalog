import { get } from "../api/requester.js";

export async function checkPermissions() {
	return await get("/permissions");
}
