"use strict";
module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define(
    "Seller",
    {
      adress: DataTypes.STRING
    },
    {}
  );
  Seller.associate = function(models) {
    // associations can be defined here
    Seller.hasOne(models.Profil, {
      foreignKey: "sellerId",
      as: "profil"
    });
    //hasmany actuelle
    //belongsto cle a renseigner
    //as toujours model a renseigner
    //si belongs to rajouter data dans define
    Seller.hasMany(models.Product, {
      foreignKey: "sellerId",
      as: "product"
    });
    Seller.hasMany(models.History, {
      foreignKey: "sellerId",
      as: "history"
    });
  };
  return Seller;
};
