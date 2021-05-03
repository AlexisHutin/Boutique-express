const Product = require("../model/Product");

exports.getBySubCategoryId = (req, res, next) => {
  console.log("controller in");

  id = req.params.s_id;
  Product.getBySubCategoryId((err, data) => {
    console.log("controller out");

    if (err) {
      res.status(500).json({
        message: err.message || "error",
      });
    } else {
        res.status(200).json({
          data: data,
        });
    }
  });
};

exports.getById = (req, res, next) => {
    console.log("controller in");
  
    id = req.params.p_id;
    Product.getById((err, data) => {
      console.log("controller out");
  
      if (err) {
        res.status(500).json({
          message: err.message || "error",
        });
      } else {
          res.status(200).json({
            data: data,
          });
      }
    });
  };
