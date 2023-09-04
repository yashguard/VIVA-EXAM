const { Router } = require("express");
const {
  productDetails,
  index,
  showProducts,
  productdata,
  productdatadb,
  addproductdb,
  deleteproductdb,
} = require("../Controllers/product.controller");
const isAuth = require("../Middlewares/isAuth");
const productRoutes = Router();

productRoutes.get("/", isAuth, index);
productRoutes.get("/productdata", isAuth, productdata);
productRoutes.get("/productdatadb", isAuth, productdatadb);
productRoutes.post("/addproductdb", isAuth, addproductdb);
productRoutes.delete("/deleteproductdb/:id", isAuth, deleteproductdb);
productRoutes
  .get("/products", isAuth, productDetails)
  .post("/products", showProducts);

module.exports = productRoutes;
