const {
  serverInsertCategory,
  serverGetCategories } = require('../services/serviceCategories');

const controllerInsertCategory = async (req, res) => {
  const { name } = req.body;
  if (name) {    
    const result = await serverInsertCategory(name);
    return res.status(201).json(result);
  }
  return res.status(400).json({ message: '"name" is required' });
};

const controllerGetCategories = async () => {
  await serverGetCategories();
};

module.exports = { 
  controllerInsertCategory,
  controllerGetCategories };