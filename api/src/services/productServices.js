const path = require("path");
const fsPromise = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

let products = require("../data/products.json");

// Read the full products file and return a promise
const getAll = function () {
	return fsPromise.readFile(path.resolve(__dirname, "../data/products.json"), "utf-8");
};

// Filter the products file and return only the product object containing the given ID
const getOne = function (id) {
	return products.find((x) => x._id == id);
};

// Filter the products file and save only the product objects that don't have the given ID
const deleteOne = function (id) {
	let result = JSON.stringify(
		products.filter((x) => x._id != id),
		"",
		2
	);
	return fsPromise.writeFile(path.resolve(__dirname, "../data/products.json"), result);
};

// Using the UUID library to create an uniq ID for a new product,
// then push that product to the products array and save file
const create = function (newProduct) {
	products.push(newProduct);
	newProduct._id = uuidv4();
	newProduct.price = Number(newProduct.price);
	let result = JSON.stringify(products, "", 2);
	return fsPromise.writeFile(path.resolve(__dirname, "../data/products.json"), result);
};

// Finding the product that needs to be edited and replacing it with the one with the new data
const edit = function (id, productData) {
	let current = products.find((x) => x._id == id);
	productData._id = current._id;
	products.splice(products.indexOf(current), 1, productData);
	let result = JSON.stringify(products, "", 2);
	return fsPromise.writeFile(path.resolve(__dirname, "../data/products.json"), result);
};

const productServices = {
	getAll,
	create,
	deleteOne,
	getOne,
	edit,
};

module.exports = productServices;
