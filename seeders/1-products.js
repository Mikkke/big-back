"use strict";

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert("Products", [
      {
        id: 1,
        sellerId: 2,
        name: "Josselin",
        price: "josselinada@gmail.com",
        quantity: "test",
        photo: "new Date()",
        type: "new Date()"
      }
    ]),
  down: queryInterface => queryInterface.bulkDelete("Products", null, {})
};
