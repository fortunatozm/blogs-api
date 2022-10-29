const CategoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'posts_categories',
    timestamps: false
  });

  return category;
};

module.exports = CategoryModel;