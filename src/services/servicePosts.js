const { BlogPost } = require('../models/index');

const serviceInsertPost = async (data) => {
  const dados = await BlogPost.create(data);
  return dados;
};

const serviceGetAllPosts = async () => {
  const data = await BlogPost.findAll();
  return data;
};

module.exports = { serviceInsertPost, serviceGetAllPosts };