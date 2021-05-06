const Express = require("express");
const Router = Express.Router();

const CategoriesController = require("../controller/CategoriesController");

Router.get("/", CategoriesController.getAll);

module.exports = Router;
