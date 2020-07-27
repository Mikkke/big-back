const { Profil, Seller, Buyer, Cart } = require("../models");
const { v4: uuidv4 } = require("uuid");

const profilController = {
  async addProfil({ email, name, adress, password, profilType }) {
    let newId = uuidv4();
    let newProfil;
    //creer couche pour verifier le mail

    // check if email exist and then ...

    if (profilType === "buyer") {
      await Buyer.create({ id: newId });
      await Cart.create({ id: newId, buyerId: newId });
      newProfil = await Profil.create({
        id: newId,
        email,
        name,
        password,
        buyerId: newId
      });
    } else if (profilType === "seller") {
      await Seller.create({ id: newId, adress });
      newProfil = await Profil.create({
        id: newId,
        email,
        name,
        password,
        sellerId: newId
      });
    }
    return newProfil;
  }
};

module.exports = profilController;

// module.exports = {
//   async addProfil({ email, name, password, adress, profilType }) {
//     let newId = uuidv4();
//     let newProfil;
//     const profil = { id: newId, email, name, password };
//     if (profilType === "buyer") {
//       await Buyer.create({ id: newId });
//       await Cart.create({ id: newId, buyerId: newId });
//       newProfil = await Profil.create({ ...profil, buyerId: newId });
//     } else if (profilType === "seller") {
//       await Seller.create({ id: newId, adress });
//       newProfil = await Profil.create({ ...profil, sellerId: newId });
//     }
//     return newProfil;
//   }
// };
