'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'BlogPost', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'Category', key: 'id' },
        onUpdate: CASCADE,
        onDelete: CASCADE,
      },
      // created_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updated_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
