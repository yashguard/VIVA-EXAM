const product = require("../Models/product.schema");
const user = require("../Models/user.schema");
let blankArray = [];

const index = (req, res) => {
  if (req.user) {
    res.render("index", { name: req.user.username });
  }
};

const productdata = (req, res) => {
  res.json({ products: blankArray });
};

// db
const productdatadb = async (req, res) => {
  let User = await user.findOne({ username: req.user.username });
  if (User) {
    res.json({ products: User.products });
  }
};

const addproductdb = async (req, res) => {
  let User = await user.findOne({ username: req.user.username });
  if (User) {
    User.products.push(req.body);
    await User.save();
  }
};

const deleteproductdb = async (req, res) => {
  let User = await user.findOne({ username: req.user.username });
  User.products = req.user.products.filter(
    (product) => product._id !== req.params.id
  );
  await User.save();
  console.log(User.products);
};

const productDetails = (req, res) => {
  res.render("products");
};

const showProducts = async (req, res) => {
  if (req.user) {
    let products = await product.create({
      ...req.body,
      user: req.user.username,
    });
    blankArray.push(products);
    let User = req.user;
    User.products = blankArray;
    res.status(201).json({ success: true, User });
  }
};

module.exports = {
  index,
  productDetails,
  showProducts,
  productdata,
  productdatadb,
  addproductdb,
  deleteproductdb,
};
