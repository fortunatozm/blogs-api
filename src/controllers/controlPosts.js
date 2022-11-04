const { serviceInsertPost, serviceGetAllPosts } = require('../services/servicePosts');

const controllerInsertPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  if (title && content && categoryIds) {
    if (!categoryIds) {
      return categoryIds;
    }  
    const dados = await serviceInsertPost(req.body);
    return res.status(201).json(dados);
  } return res.status(400).json({ message: 'Some required fields are missing' });
};

const controllerGetAllPosts = async (_req, res) => {
  const data = await serviceGetAllPosts();
  return res.status(200).json(data);
};

module.exports = { controllerInsertPost, controllerGetAllPosts };