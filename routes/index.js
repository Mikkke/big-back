const express = require("express");
const mainRouter = express.Router();
const userRouter = require("./profilRouter");
const productRouter = require("./productRouter");

mainRouter.use("/profil", userRouter);
mainRouter.use("/produits", productRouter);

module.exports = mainRouter;
