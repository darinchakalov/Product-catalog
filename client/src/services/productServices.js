import { get, post } from "../api/requester.js";

async function getAllProducts() {
	return await get("/data/products");
}

async function createProduct(data) {
	return await post("/data/products", data);
}

export default {
	getAllProducts,
	createProduct,
};
