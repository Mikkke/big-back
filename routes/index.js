const express = require("express");
const mainRouter = express.Router();
const userRouter = require("./profilRouter");

mainRouter.use("/profil", userRouter);

module.exports = mainRouter;
