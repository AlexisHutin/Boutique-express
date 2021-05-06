const SubCategory = require("../model/SubCategory");

exports.getByCategoryId = (req, res, next) => {
  console.log("controller in");

  id = req.params.c_id;
  SubCategory.getByCategoryId((err, data) => {
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
