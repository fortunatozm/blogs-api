const PostModel = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  postsCategories.associate = (model) => {
    postsCategories.belongsToMany(model.BlogPost, {
      as: 'blog_posts',
      through: 'posts_categories',
      foreignKey: 'id_blog_posts'
    });
  },

  postsCategories.associate = (model) => {
    postsCategories.belongsToMany(model.Category, {
      as: 'category',
      through: 'posts_categories',
      foreignKey: 'id_category'
    });
  }

  return postsCategories;
};

module.exports = PostModel;