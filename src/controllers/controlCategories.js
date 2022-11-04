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

const controllerGetCategories = async (_req, res) => {
  const result = await serverGetCategories();
  return res.status(200).json(result);
};

module.exports = { 
  controllerInsertCategory,
  controllerGetCategories,
 };