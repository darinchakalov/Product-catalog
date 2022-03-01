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
	console.log("here ", productData);
	productServices
		.create(productData)
		.then((response) => {
			res.status(201).json({ message: "Product created succesfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
};

const getSingleProduct = (req, res) => {
	res.json(productServices.getOne(req.params.id));
};

const deleteProduct = (req, res) => {
	productServices
		.deleteOne(req.params.id)
		.then((response) => {
			res.json({ message: "Product deleted succesfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
};

const editProduct = (req, res) => {
	productServices
		.edit(req.params.id, req.body)
		.then((response) => {
			res.status(200).json({ message: "Product edited succesfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
};

router.get("/data/products", getProducts);
router.post("/data/products", createProduct);
router.get("/data/products/:id", getSingleProduct);
router.delete("/data/products/:id", deleteProduct);
router.put("/data/products/:id", editProduct);

module.exports = router;
