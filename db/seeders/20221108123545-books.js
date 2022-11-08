/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciUo7P3KDEhFPUOXS9eo5DIa4qal5ndku3U6HWhq8Wg&s',
      nameBook: 'John Doe',
      author: 'John Doe',
      comments: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
