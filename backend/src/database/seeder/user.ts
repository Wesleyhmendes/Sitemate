import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('user_info', [
      {
        id: 1,
        title: 'admin',
        description: 'Administrator account',
      },
      {
        id: 2,
        title: 'user',
        description: 'Regular user account',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('user_info', {});
  },
}
