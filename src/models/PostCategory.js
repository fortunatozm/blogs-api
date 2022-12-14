const PostModel = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
     },
    categoryId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
     },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  postsCategories.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: 'posts_categories',
      foreignKey: 'post_id',
      otherKey: 'category_id'
    })
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: 'posts_categories',
      foreignKey: 'category_id',
      otherKey: 'post_id'
    })

  };

  return postsCategories;
};

module.exports = PostModel;