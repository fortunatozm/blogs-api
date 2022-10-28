const PostModel = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  postsCategories.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: 'posts_categories',
      foreignKey: ' id_category',
      otherKey: 'id_blog_posts'
    })
    BlogPost.belongsToMany(Category, {
      as: 'category',
      through: 'posts_categories',
      foreignKey: 'id_blog_posts',
      otherKey: 'id_category'
    })

  };

  return postsCategories;
};

module.exports = PostModel;