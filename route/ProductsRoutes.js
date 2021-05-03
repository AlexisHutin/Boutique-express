const Express = require('express');
const Router = Express.Router();

const ProductsController = require('../controller/ProductsController');

Router.get('/all/:s_id', ProductsController.getBySubCategoryId);
Router.get('/:p_id', ProductsController.getById);

module.exports = Router;