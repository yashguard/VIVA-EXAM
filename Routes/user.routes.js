const { Router } = require("express");
const {
  getSignup,
  postSignup,
  getSignin,
  postSignin,
  otpSend,
  otpCheck,
  getEmail,
  checkEmail,
} = require("../Controllers/user.controllers");
const { validationSignup } = require("../Middlewares/user.middleware");
const passport = require("passport");
const isAuth = require("../Middlewares/isAuth");
const userRoutes = Router();

userRoutes
  .get("/signup", getSignup)
  .post("/signup", validationSignup, postSignup);
userRoutes
  .get("/signin", getSignin)
  .post("/signin", passport.authenticate("local"), postSignin);
userRoutes.get("/otp", otpSend).post("/otp", otpCheck);
userRoutes.get("/email", getEmail).post("/email", checkEmail);

module.exports = userRoutes;
