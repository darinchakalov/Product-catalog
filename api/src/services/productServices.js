const path = require("path");
const fsPromise = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

let products = require("../data/products.json");

const getAll = function () {
	return fsPromise.readFile(path.resolve(__dirname, "../data/products.json"), "utf-8");
};

const getOne = function (id) {
	return products.find((x) => x._id == id);
};

const deleteOne = function (id) {
	let result = JSON.stringify(
		products.filter((x) => x._id != id),
		"",
		2
	);
	return fsPromise.writeFile(path.resolve(__dirname, "../data/products.json"), result);
};

const create = function (newProduct) {
	products.push(newProduct);
	newProduct._id = uuidv4();
	newProduct.price = Number(newProduct.price);
	let result = JSON.stringify(products, "", 2);
	return fsPromise.writeFile(path.resolve(__dirname, "../data/products.json"), result);
};

const productServices = {
	getAll,
	create,
	deleteOne,
	getOne,
};

module.exports = productServices;
