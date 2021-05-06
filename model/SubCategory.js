const SQL = require("../database");

const SubCategoryModel = function (subCategory) {
  this.id = subCategory.id;
  this.name = subCategory.name;
  this.category_id = subCategory.category_id;
};

SubCategoryModel.getByCategoryId = (result) => {
  SQL.query(
    "SELECT * FROM sub_categories WHERE category_id = " + id,
    (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = SubCategoryModel;
