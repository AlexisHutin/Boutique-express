const SQL = require("../database");

const CategoryModel = function (category) {
  this.id = category.id;
  this.name = category.name;
};

CategoryModel.getAll = (result) => {
  console.log("model");
  SQL.query("SELECT * FROM categories", (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = CategoryModel;
