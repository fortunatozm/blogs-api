const BlogModel = (sequelize, DataTypes) => {
    const blogPosts = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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
        as: 'user',
        foreignKey: 'user_id'
      });
    }
  
    return blogPosts;
  };
  
  module.exports = BlogModel;