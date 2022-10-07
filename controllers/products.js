const mysql = require("../databases/mysql");

const getProducts = (req, res) => {
  const SQL = "SELECT * FROM products";

  mysql.query(SQL, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(202).json({
        products: result,
      });
    }
  });
};

module.exports = { getProducts };
