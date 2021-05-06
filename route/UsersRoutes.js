const Express = require("express");
const Router = Express.Router();

const UsersController = require("../controller/UsersController");

Router.post("/signup", UsersController.create);

module.exports = Router;
