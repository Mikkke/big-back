'use strict'

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: 1,
      firstname: 'ADA',
      lastname: 'Josselin',
      email: 'josselinada@gmail.com',
      password: 'test',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
}
