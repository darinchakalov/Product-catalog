import { get, post, del, put } from "../api/requester.js";

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

async function editProduct(id, data) {
	return await put("/data/products/" + id, data);
}

export default {
	getAllProducts,
	getSingleProduct,
	createProduct,
	deleteProduct,
	editProduct,
};
