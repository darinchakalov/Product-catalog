const path = require("path");
const fsPromise = require("fs/promises");

const getAll = function () {
	return fsPromise.readFile(path.resolve(__dirname, "../data/products.json"), "utf-8");
};

const productServices = {
	getAll,
};

module.exports = productServices;
