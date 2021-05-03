const Express = require('express');
const Router = Express.Router();

const SubCategoriesController = require('../controller/SubCategoriesController');

Router.get('/:c_id', SubCategoriesController.getByCategoryId);

module.exports = Router;