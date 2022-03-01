const productsController = require("../controllers/productsController.js");

module.exports = (app) => {
	app.use(productsController);
};
