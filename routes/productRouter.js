const productRouter = require("express").Router();
const {
  addProduct,
  getAllProduct
} = require("../controllers/productController");

//post product
productRouter.post("/", async (req, res) => {
  const { sellerId, ...data } = req.body;
  try {
    const productAdded = await addProduct(data, sellerId);
    res.status(200).json(productAdded);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

productRouter.get("/", async (req, res) => {
  const product = await getAllProduct();
  res.status(200).json(product);
});
/*
productRouter.put();
productRouter.patch();
productRouter.delete(); */

module.exports = productRouter;
