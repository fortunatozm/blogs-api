const CategoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'category',
    underscored: true,
    timestamps: false
  });

  return category;
};

module.exports = CategoryModel;