const express = require('express');
const { getAllProducts, createProduct, updateProduct, getProduct, deleteProduct } = require('../controller/productController');
const router = express.Router();

router.route("/product").get(getAllProducts);
router.route("/product/createProduct").post(createProduct);
router.route("/product/:id").put(updateProduct).get(getProduct).delete(deleteProduct);

module.exports = router;