const router = require("express").Router();

const authorization = require("../utils/authorization");

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/getProducts", authorization, getProducts);
router.post("/createProduct", authorization, createProduct);
router.put("/updateProduct/:id", authorization, updateProduct);
router.delete("/deleteProduct/:id", authorization, deleteProduct);

module.exports = router;
