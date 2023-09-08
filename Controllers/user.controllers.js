const user = require("../Models/user.schema");

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
      return res.status(404).json({
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
    let user = await req.user;
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
};

const getEmail = async (req, res) => {
  res.render("email");
};

const checkEmail = async (req, res) => {
  let User = await user.findOne({ email: req.body.email });
  if (!User) {
    return res.status(404).send("User not found");
  }
  res.json({ success: true });
};

const otpSend = (req, res) => {
  res.render("otp");
};

const otpCheck = (req, res) => {
  res.json({ success: true, otp: req.body.otp });
};

module.exports = {
  getSignup,
  postSignup,
  getSignin,
  postSignin,
  otpSend,
  otpCheck,
  getEmail,
  checkEmail,
};
