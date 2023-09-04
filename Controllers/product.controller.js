const product = require("../Models/product.schema");
const user = require("../Models/user.schema");
let blankArray = [];

const index = (req, res) => {
  if (req.user) {
    res.render("index", { name: req.user.username });
  }
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
    let User = await user.findOne({ username: req.user.username });
    User.products = blankArray;
    await User.save();
    res.status(201).json({ success: true, User });
  }
};

module.exports = { index, productDetails, showProducts };
