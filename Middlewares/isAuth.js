const isAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/user/signup");
  }
};

module.exports = isAuth;
