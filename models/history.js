"use strict";
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define(
    "History",
    {
      date: DataTypes.STRING,
      sellerId: {
        type: DataTypes.INTEGER,
        reference: {
          model: "Sellers",
          key: "id"
        }
      },
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
  History.associate = function(models) {
    // associations can be defined here
    History.hasOne(models.Product, {
      foreignKey: "profilId",
      as: "product"
    });
    History.belongsTo(models.Seller, {
      foreignKey: "sellerId",
      as: "seller"
    });
    History.belongsTo(models.Buyer, {
      foreignKey: "buyerId",
      as: "buyer"
    });
  };
  return History;
};
