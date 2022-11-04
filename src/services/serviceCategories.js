const { Category } = require('../models/index');

const serverInsertCategory = async (name) => {
  const data = await Category.create({ name });
  return data;
};

const serverGetCategories = async () => {
  const data = Category.findAll();
  return data;
};

module.exports = { 
  serverInsertCategory,
  serverGetCategories };