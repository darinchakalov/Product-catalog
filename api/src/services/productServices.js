const path = require("path");
const fsPromise = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

let products = require("../data/products.json");

const getAll = function () {
	return fsPromise.readFile(path.resolve(__dirname, "../data/products.json"), "utf-8");
};

const create = function (newProduct) {
	products.push(newProduct);
	newProduct._id = uuidv4();
	console.log(newProduct);
	let result = JSON.stringify(products, "", 2);
	return fsPromise.writeFile(path.resolve(__dirname, "../data/products.json"), result);
};

const productServices = {
	getAll,
	create,
};

module.exports = productServices;
