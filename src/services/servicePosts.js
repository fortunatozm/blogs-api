const { BlogPost } = require('../models/index');

const serviceInsertPost = async (data) => {
  const dados = await BlogPost.create(data);
  return dados;
};

module.exports = { serviceInsertPost };