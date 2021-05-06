const SQL = require("../database");

const UserModel = function (user) {
  this.id = user.id;
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  this.adress = user.address;
  this.phone = user.phone;
};

UserModel.create = (user, result) => {
  SQL.query(
    "INSERT INTO users (username, email, password, adress, phone) VALUES ('" +
      user.username +
      "','" +
      user.email +
      "','" +
      user.password +
      "','" +
      user.adress +
      "','" +
      user.phone +
      "')",
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = UserModel;
