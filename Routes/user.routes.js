const { Router } = require("express");
const {
  getUsers,
  getSignup,
  postSignup,
  getSignin,
  postSignin,
} = require("../Controllers/user.controllers");
const {
  validationSignup,
} = require("../Middlewares/user.middleware");
const passport = require("passport");
const userRoutes = Router();

userRoutes.get("/details", getUsers);
userRoutes
  .get("/signup", getSignup)
  .post("/signup", validationSignup, postSignup);
userRoutes
  .get("/signin", getSignin)
  .post(
    "/signin",
    passport.authenticate("local"),
    postSignin
  );

module.exports = userRoutes;
