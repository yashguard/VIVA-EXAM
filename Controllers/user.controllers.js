const user = require("../Models/user.schema");

const getUsers = (req, res) => {
  res.status(200).send("Welcome to the Google");
};

const getSignup = (req, res) => {
  res.render("signup");
};

const getSignin = (req, res) => {
  res.render("signin");
};

const postSignup = async (req, res) => {
  try {
    let userExist = await user.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(404)
        .json({
          success: false,
          message: "User already exists in the database",
        });
    }
    let User = await user.create(req.body);
    res.status(201).json({ success: true, User });
  } catch (error) {
    console.log(error);
  }
};

const postSignin = async (req, res) => {
  try {
    let user = await req.user
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, getSignup, postSignup, getSignin, postSignin };
