const MySql = require("mysql");

const Connection = MySql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "boutique-js-back",
});

Connection.connect((err) => {
  if (err) throw err;

  console.log("Connected to database");
});

module.exports = Connection;
