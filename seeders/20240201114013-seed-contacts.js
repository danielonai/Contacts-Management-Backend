'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // MSSQL uses the OUTPUT clause for bulk inserts to get the generated IDs
    const insertedRecords = await queryInterface.bulkInsert('contacts', [
      {
        firstName: 'John',
        lastName: 'Doe',
        country: 'USA',
        city: 'New York',
        street: 'Broadway',
        zipCode: '10007',
        phone: '1234567890',
        email: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        country: 'USA',
        city: 'Los Angeles',
        street: 'Hollywood',
        zipCode: '90028',
        phone: '0987654321',
        email: 'jane.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jim',
        lastName: 'Beam',
        country: 'USA',
        city: 'Chicago',
        street: 'Michigan Ave',
        zipCode: '60611',
        phone: '1122334455',
        email: 'jim.beam@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });

    // If you need the generated IDs, you can use them here
    const generatedIDs = insertedRecords.map(record => record.id);
    
    // You can do additional operations with the generated IDs if needed

    return generatedIDs;
  },

  down: async (queryInterface, Sequelize) => {
    // In MSSQL, bulkDelete does not return the deleted records, so you need to use an alternative approach
    // This assumes you have a column 'id' as the primary key
    const allRecords = await queryInterface.sequelize.query('SELECT id FROM contacts', { type: Sequelize.QueryTypes.SELECT });

    // Delete all records from the 'contacts' table
    await queryInterface.bulkDelete('contacts', null, {});

    // Return the IDs of the deleted records
    const deletedIDs = allRecords.map(record => record.id);
    return deletedIDs;
  }
};
