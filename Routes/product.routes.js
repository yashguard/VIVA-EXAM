const { Router } = require("express");
const { productDetails, index, showProducts } = require("../Controllers/product.controller");
const isAuth = require("../Middlewares/isAuth");
const productRoutes = Router();

productRoutes.get("/", isAuth, index);
productRoutes.get("/products", isAuth, productDetails).post("/products", showProducts);

module.exports = productRoutes;
