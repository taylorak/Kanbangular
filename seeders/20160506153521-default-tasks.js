'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Tasks', [
        {
          title: 'start project',
          description: 'start project',
          status: 'Todo',
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        },
        {
          title: 'start database',
          description: 'start database',
          status: 'In-Progress',
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        },
        {
          title: 'start server',
          description: 'start server',
          status: 'Done',
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        },
        {
          title: 'finish project',
          description: 'finish project',
          status: 'Todo',
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        },
        {
          title: 'finish database',
          description: 'finish database',
          status: 'In-Progress',
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        },
        {
          title: 'finish server',
          description: 'finish server',
          status: 'Done',
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', [
      {
        title: 'start project'
      },
      {
        title: 'start database'
      },
      {
        title: 'start server'
      },
      {
        title: 'finish project'
      },
      {
        title: 'finish database'
      },
      {
        title: 'finish server'
      }
      ], {});
  }
};
