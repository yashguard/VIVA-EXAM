const mongoose = require("mongoose");
require("dotenv").config();
let db = process.env.DB;

const connect = () => {
  mongoose
    .connect(db)
    .then(() => console.log("Connected successfully with database"))
    .catch((err) => console.log(err));
};

module.exports = connect;
