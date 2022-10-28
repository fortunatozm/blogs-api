const CategoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'category',
    timestamps: false
  });

  return category;
};

module.exports = CategoryModel;