const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, },
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
        foreignKey: 'id'
      });
    }
  
    return User;
  };
  
  module.exports = UserModel;