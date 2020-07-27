const express = require("express");
const app = express();
const port = 8080;
const mainRouter = require("./routes/index");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieSession = require("cookie-session");
const session = require("express-session");
const passport = require("passport");
const { Profil } = require("./models");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

require("./passport/passportConfig")(passport, Profil);
app.use(
  session({
    secret: "Surlesitechampsceux",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
