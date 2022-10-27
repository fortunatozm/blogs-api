const PostModel = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('posts_categories', {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  return postsCategories;
};

module.exports = PostModel;