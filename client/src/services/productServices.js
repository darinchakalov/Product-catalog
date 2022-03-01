import { get, post, del } from "../api/requester.js";

async function getAllProducts() {
	return await get("/data/products");
}

async function getSingleProduct(id) {
	return await get("/data/products/" + id);
}

async function createProduct(data) {
	return await post("/data/products", data);
}

async function deleteProduct(id) {
	return await del("/data/products/" + id);
}

export default {
	getAllProducts,
	getSingleProduct,
	createProduct,
	deleteProduct,
};
