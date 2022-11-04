const { Category } = require('../models/index');

const serverInsertCategory = async (name) => {
  const data = await Category.create({ name });
  return data;
};

const serverGetCategories = async () => {

};

module.exports = { serverInsertCategory, serverGetCategories };