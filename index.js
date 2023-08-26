const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/user.routes");
const productRoutes = require("./Routes/product.routes");
const connect = require("./Config/db");
const expressSessions = require("express-session");
const passport = require("passport");
const localpassport = require("./Middlewares/passport");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(
  expressSessions({ secret: "secret", resave: false, saveUninitialized: false })
);
server.use(passport.initialize());
server.use(passport.session());
localpassport(passport);
server.use("/", productRoutes);
server.use("/user", userRoutes);
server.set("view engine", "ejs");
server.set("views", __dirname + "/Views");
server.use(express.static(__dirname + "/Public"));
require("dotenv").config();
let port = process.env.PORT;

server.listen(port, () => {
  console.log("listening on port " + port);
  connect();
});
