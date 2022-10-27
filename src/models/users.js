const UserModel = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      tableName: 'users',
      underscored: true,
      timestamps: false
    });
  
    return user;
  };
  
  module.exports = UserModel;