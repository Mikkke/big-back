const { Product } = require("../models/product");
const { v4: uuidv4 } = require("uuid");

const produitController = {
  getAllProduct: async () => {
    const products = await Product.findAll({
      order: [["createdAt", "ASC"]],
      attibutes: [
        "id",
        "sellerId",
        "name",
        "price",
        "quantity",
        "photo",
        "type"
      ],
      raw: true
    });
    return products;
  },

  getOneProduct: async id => {
    const product = await Product.findByPk(id, {
      attibutes: ["name", "sellerId", "price", "quantity", "photo", "type"],
      raw: true
    });
    return product;
  },
  addProduct: async (data, sellerId) => {
    const newProduct = { id: uuidv4(), sellerId, ...data };
    const productCreate = await Product.create(newProduct);
    return productCreate;
  },
  deleteProduct: async id => {
    const product = await Product.findOne({ where: { id } });
    if (product) await product.destroy();
  },
  updateProduct: async (data, id) => {}
};

module.exports = produitController;
