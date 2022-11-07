const { Router } = require('express');
const { 
  controllerLogin,
  controllerUser,
  controllerGetUser,
  controllerGetUserById } = require('../controllers/controlUser');

const { 
  controllerInsertCategory,
  controllerGetCategories,
 } = require('../controllers/controlCategories');

 const { 
  // controllerInsertPost,
  controllerGetAllPosts,
  controllerGetPostById } = require('../controllers/controlPosts');

const { middwareValidToken } = require('../middwares/token');

const myRouter = Router();

myRouter.post('/login', controllerLogin);
myRouter.post('/user', controllerUser);
myRouter.post('/categories', middwareValidToken, controllerInsertCategory);
// myRouter.post('/post', middwareValidToken, controllerInsertPost);
myRouter.get('/user', middwareValidToken, controllerGetUser);
myRouter.get('/user/:id', middwareValidToken, controllerGetUserById);
myRouter.get('/categories', middwareValidToken, controllerGetCategories);
myRouter.get('/post', middwareValidToken, controllerGetAllPosts);
myRouter.get('/post/:id', middwareValidToken, controllerGetPostById);

module.exports = {
  myRouter,
};