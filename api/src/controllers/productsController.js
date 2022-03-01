const productServices = require("../services/productServices.js");

const router = require("express").Router();

const getProducts = (req, res) => {
	productServices.getAll().then((response) => {
		res.send(response);
	});
};

const createProduct = (req, res) => {
	let productData = req.body;
	console.log(req.body);
	res.status(201).json({ message: "Product created succesfully" });
};

router.get("/data/products", getProducts);
router.post("/data/products", createProduct);

module.exports = router;
