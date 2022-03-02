const router = require("express").Router();

const permissionsData = require("../data/permissions.json");

const permCheck = (req, res) => {
	res.json(permissionsData.permissions);
};

router.get("/permissions", permCheck);

module.exports = router;
