const productServices = require("../services/productServices.js");

const router = require("express").Router();

const getProducts = (req, res) => {
	productServices
		.getAll()
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((err) => {
			return err;
		});
};

const createProduct = (req, res) => {
	let productData = req.body;
	productServices
		.create(productData)
		.then((response) => {
			res.status(201).json({ message: "Product created succesfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
};

router.get("/data/products", getProducts);
router.post("/data/products", createProduct);

module.exports = router;
