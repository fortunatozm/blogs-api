const PostModel = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  return postsCategories;
};

module.exports = PostModel;