"use strict";
module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define("Buyer", {}, {});
  Buyer.associate = function(models) {
    // associations can be defined here
    Buyer.hasOne(models.Cart, {
      foreignKey: "buyerId",
      as: "cart"
    });
    Buyer.hasOne(models.Profil, {
      foreignKey: "buyerId",
      as: "profil"
    });
    Buyer.hasMany(models.History, {
      foreignKey: "buyerId",
      as: "histories"
    });
  };
  return Buyer;
};
