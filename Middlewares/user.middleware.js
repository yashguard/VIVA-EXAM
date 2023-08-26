const validationSignup = (req, res, next) => {
  let { username, password, email, number, image } = req.body;

  if (username && password && email && number && image) {
    next();
  } else {
    res
      .status(401)
      .json({ success: false, message: "Please fill the details properly" });
  }
};
module.exports = { validationSignup };
