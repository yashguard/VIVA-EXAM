const user = require("../Models/user.schema");

// =======================================
//           localStrategy
// =======================================
const localStrategy = require("passport-local").Strategy;
const localpassport = (passport) => {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        let User = await user.findOne({ email : username });
        if (!User) {
          return done(null, false);
        }

        if (User.password != password) {
          return done(null, false);
        }

        return done(null, User);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((User, done) => {
    try {
      return done(null, User.id);
    } catch (error) {
      return done(error, false);
    }
  });

  passport.deserializeUser(async (id, done) => {
    let User = await user.findById(id);
    try {
      return done(null, User);
    } catch (error) {
      return done(error, false);
    }
  });
};

module.exports = localpassport;
