const BlogModel = (sequelize, DataTypes) => {
    const blogPosts = sequelize.define('blog_posts', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    });
  
    return blogPosts;
  };
  
  module.exports = BlogModel;