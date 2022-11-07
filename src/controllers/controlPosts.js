const { 
  serviceInsertPost,
  serviceGetAllPosts,
  serverGetAllCategories,
  serviceGetPostById,
  serviceDelePostById,
} = require('../services/servicePosts');
const { validToken } = require('../functions');

const forvalid = (array1, array2) => {
  let count = 0;
  for (let index = 0; index < array2.length; index += 1) {
    if (array1.includes(array2[index])) {
      count += 1;
    }
  }
  return count === array2.length;  
};
const controllerInsertPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const { id: userId } = validToken(authorization);
  const datas = { title, content, categoryIds, userId };
  const categorias = await serverGetAllCategories();
  const idCategory = categorias.map(({ dataValues }) => dataValues.id);
  if (title && content && categoryIds) {
    // console.log(categorias);
    // console.log('idCategory:', idCategory);
    // console.log('categoryIds:', categoryIds);
    // console.log(idCategory.includes(categoryIds));
    console.log('array', forvalid(idCategory, categoryIds));
    if (forvalid(idCategory, categoryIds)) {
      const dados = await serviceInsertPost(datas);
      return res.status(201).json(dados);
    }
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  } return res.status(400).json({ message: 'Some required fields are missing' });
};

const controllerGetAllPosts = async (_req, res) => {
  const data = await serviceGetAllPosts();
  return res.status(200).json(data);
};

const controllerGetPostById = async (req, res) => {
  const { id } = req.params;
  const data = await serviceGetPostById(id);
  if (data !== null) {
    return res.status(200).json(data);
  } return res.status(404).json({ message: 'Post does not exist' });
};

const controllerDelePostById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { id: userId } = validToken(authorization);
  // if (userId) {
    
  // } else {
    
  // }
  const data = await serviceDelePostById(id, userId);
  return res.status(200).json(data);
};

module.exports = {
  controllerInsertPost,
  controllerGetAllPosts,
  controllerGetPostById,
  controllerDelePostById };