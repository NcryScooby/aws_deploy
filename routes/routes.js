const router = require("express").Router();

const authorization = require("../utils/authorization");

const { getProducts } = require("../controllers/products");

router.get("/getProducts", authorization, getProducts);

module.exports = router;
