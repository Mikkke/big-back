"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profil = sequelize.define(
    "Profil",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
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
  Profil.associate = function(models) {
    // associations can be defined here
    Profil.belongsTo(models.Seller, {
      foreignKey: "sellerId",
      as: "seller"
    });
    Profil.belongsTo(models.Buyer, {
      foreignKey: "buyerId",
      as: "buyer"
    });
  };
  return Profil;
};
