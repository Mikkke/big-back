"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      sellerId: {
        type: DataTypes.INTEGER,
        reference: { model: "Sellers", key: "id" }
      },
      price: DataTypes.STRING,
      quantity: DataTypes.STRING,
      description: DataTypes.STRING,
      photo: DataTypes.STRING,
      type: DataTypes.STRING
    },
    {}
  );
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Seller, {
      foreignKey: "sellerId",
      as: "seller"
    });
    Product.belongsTo(models.History, {
      foreignKey: "productId",
      as: "products"
    });
  };
  return Product;
};
