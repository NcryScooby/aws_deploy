const router = require("express").Router();

const { getProducts } = require("../controllers/products");

router.get("/getProducts", getProducts);

module.exports = router;
