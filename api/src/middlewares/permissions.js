const permissions = ["CREATE", "READ", "UPDATE", "DELETE"];

exports.hasPermissions = (req, res, next) => {
	res.json(permissions);
	next();
};
