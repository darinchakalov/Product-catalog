const express = require("express");
const { cors } = require("../middlewares/cors.js");

module.exports = (app) => {
	app.use(express.urlencoded({ extended: true })); // Allows access to the request body
	app.use(express.json()); // Allows to send json in the response 
	app.use(cors); 
};
