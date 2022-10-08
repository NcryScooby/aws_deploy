const mysql = require("../databases/mysql");

const getProducts = (req, res) => {
  const SQL = "SELECT * FROM products";

  mysql.query(SQL, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        products: result,
      });
    }
  });
};

const createProduct = (req, res) => {
  const { name, price } = req.body;
  const SQL = `INSERT INTO products (name, price) VALUES ('${name}', '${price}')`;

  mysql.query(SQL, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Product created successfully",
      });
    }
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const SQL = `UPDATE products SET name = '${name}', price = '${price}' WHERE id = ${id}`;

  mysql.query(SQL, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Product updated successfully",
      });
    }
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const SQL = `DELETE FROM products WHERE id = ${id}`;

  mysql.query(SQL, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Product deleted successfully",
      });
    }
  });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
