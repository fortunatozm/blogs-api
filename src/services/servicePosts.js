// const { use } = require('express/lib/router');
const { BlogPost, User, Category } = require('../models/index');

const serviceInsertPost = async (data) => {
  const dados = await BlogPost.create(data);
  return dados;
};

const serviceGetAllPosts = async () => {
  const data = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  // const dados = data.dataValues;
  return data;
};

module.exports = { serviceInsertPost, serviceGetAllPosts };