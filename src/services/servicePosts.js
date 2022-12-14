// const { use } = require('express/lib/router');
const { BlogPost, User, Category, PostCategory } = require('../models/index');

const serverGetAllCategories = async () => {
  const data = await Category.findAll();
  return data;
};

const serviceInsertPost = async (data) => {
  const dados = await BlogPost.create({ ...data, published: new Date(), updated: new Date() });
  console.log('Dados', data.categoryIds, dados.id);
  const promises = data.categoryIds.map(async (dat) => PostCategory.create({ 
    postId: dados.id, categoryId: dat }));
  await Promise.all(promises);
  
  return dados;
};

const serviceGetAllPosts = async () => {
  const data = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return data;
};

const serviceGetPostById = async (id) => {
  const data = await BlogPost.findOne({
    where: { id },
    include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return data;
};

const serviceDelePostById = async (idd, tokenId) => {
  const datas = await BlogPost.findOne({ where: { id: idd } });

  if (datas) {
    if (tokenId === datas.user_id) {    
      const data = await BlogPost.destroy({ where: { id: idd } });
      return data;
    } return 401; 
  } return 404;
};

const serviceUpdatePostById = async (id, datas, userId) => {
  const ids = await BlogPost.findOne({ where: { userId } });
  if (ids !== null) {   
    await BlogPost.update({ 
      title: datas.title, content: datas.content, updated: new Date() }, { where: { id } });

    const dados = await BlogPost.findOne({
      where: { id },
      include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return dados;
  } return 401;
};

const controllerSearchPost = async (query) => {
  const data = query;
  return data;
};

module.exports = {
  serviceInsertPost,
  serviceGetAllPosts,
  serverGetAllCategories,
  serviceGetPostById,
  serviceDelePostById,
  serviceUpdatePostById,
  controllerSearchPost };