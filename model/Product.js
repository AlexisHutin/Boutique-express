const SQL = require("../database");

const ProductModel = function (product) {
  this.id = product.id;
  this.name = product.name;
};

ProductModel.getBySubCategoryId = (result) => {
  SQL.query(
    "SELECT * FROM products WHERE sub_category_id = " + id,
    (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);
      }
      result(null, res);
    }
  );
};

ProductModel.getById = (result) => {
  SQL.query("SELECT * FROM products WHERE id = " + id, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = ProductModel;
