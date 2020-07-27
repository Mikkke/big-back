const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { Profil } = require("../models");
const { addProfil } = require("../controllers/profilControler");
const passport = require("passport");
userRouter.post("/register", async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      adress,
      sellerId,
      buyerId,
      profilType
    } = req.body;
    const profilExist = await Profil.findOne({ where: { email: email } });
    if (profilExist) {
      console.log("j'existe deja");
      res.status(400).json({ message: "user already exist" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newProfil = await addProfil({
        name,
        sellerId,
        buyerId,
        email,
        adress,
        profilType,
        password: hashedPassword
      });
      console.log("newProfil from routes :>> ", newProfil);
      res.status(200).json({ message: "user create", profil: newProfil });
    }
  } catch (error) {
    console.log("error du register:>> ", error);
  }
});

userRouter.post("/login", async (req, res, next) => {
  passport.authenticate("local", (error, profil, infos) => {
    if (error) {
      return res.status(500).json({
        message: error.message || "Oups something happen"
      });
    }
    req.logIn(profil, error => {
      if (error) {
        return res.status(500).json({
          message: error.message || "Oups something happen"
        });
      }
      profil.dataValues.isAuthenticated = true;
      //console.log("profil 23:>> ", profil);
      //res.send({ test: true });
      console.log("profil du log in :>> ", profil.dataValues);

      console.log("req.user :>> ", req.user);
      return res.json(profil);
    });
  })(req, res, next);
});

userRouter.post("/sign-out", (req, res) => {
  req.logOut();
  res.status(200).json({ message: "bye bye" });
});

module.exports = userRouter;
