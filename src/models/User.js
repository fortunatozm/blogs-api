const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      tableName: 'users',
      underscored: true,
      timestamps: false
    });

    User.associate = (model) => {
      User.hasMany(model.BlogPost, {
        as: 'blog_posts',
        foreignKey: 'id_blog_posts'
      });
    }
  
    return User;
  };
  
  module.exports = UserModel;