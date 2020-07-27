const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

module.exports = (passport, Profil) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email"
      },
      async (email, password, done) => {
        const profil = await Profil.findOne({
          where: { email }
        });
        if (profil === null) {
          return done({ message: "No user with that emaill" });
        }

        try {
          if (await bcrypt.compare(password, profil.password)) {
            return done(null, profil);
          } else {
            return done({
              message: "password or email incorrect"
            });
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  passport.serializeUser((profil, done) => done(null, profil.id));

  passport.deserializeUser((id, done) => {
    Profil.findOne({ where: { id } }).then((id, email) =>
      done(null, { id, email })
    );
  });
};
