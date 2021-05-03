const Category = require("../model/Category");

exports.getAll = (req, res, next) => {
  console.log("controller in");

  Category.getAll((err, data) => {
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
