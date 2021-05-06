const Express = require("express");
const Cors = require("cors");

// const Database = require('./database');

const CategoriesRoutes = require("./route/CategoriesRoutes");
const SubCategoriesRoutes = require("./route/SubCategoriesRoutes");
const ProductsRoutes = require("./route/ProductsRoutes");
const UsersRoutes = require("./route/UsersRoutes");

const App = Express();
App.use(Express.json());


// let car var c'est pas bien
let corsOptions = {
  origin: "http://localhost:8080",
};

App.use(Cors(corsOptions));

App.use("/categories", CategoriesRoutes);
App.use("/sub-categories", SubCategoriesRoutes);
App.use("/products", ProductsRoutes);
App.use("/users", UsersRoutes);

module.exports = App;
