"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      buyerId: {
        type: DataTypes.INTEGER,
        reference: {
          model: "Buyers",
          key: "id"
        }
      }
    },
    {}
  );
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.Buyer, {
      foreignKey: "buyerId",
      as: "buyer"
    });
    // Cart.hasMany(models.Product, {
    //   foreignKey: "cartId",
    //   as: "product"
    // });
  };
  return Cart;
};
