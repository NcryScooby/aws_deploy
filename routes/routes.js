const router = require("express").Router();

const authorization = require("../utils/authorization");

const { getProducts, createProduct } = require("../controllers/products");

router.get("/getProducts", authorization, getProducts);
router.post("/createProduct", authorization, createProduct);

module.exports = router;
