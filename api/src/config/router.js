const productsController = require("../controllers/productsController.js");
const permissionsController = require("../controllers/permissionsController.js");

module.exports = (app) => {
	app.use(productsController);
	app.use(permissionsController);
};
