const BlogModel = (sequelize, DataTypes) => {
    const blogPosts = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    });

    blogPosts.associate = (model) => {
      blogPosts.belongsTo(model.User, {
        as: 'users',
        foreignKey: 'id_user'
      });
    }
  
    return blogPosts;
  };
  
  module.exports = BlogModel;