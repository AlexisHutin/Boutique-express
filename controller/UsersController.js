const User = require("../model/User");

exports.create = (req, res, next) => {
  User.create(req.body, (err) => {
    if (err) {
      res.status(500).json({
        message: err.message || "error",
      });
    } else {
      res.status(200).json({
        status: "success",
      });
    }
  });
};
