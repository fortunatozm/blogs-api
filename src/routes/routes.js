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

 const { controllerInsertPost } = require('../controllers/controlPosts');

const { middwareValidToken } = require('../middwares/token');

const myRouter = Router();

myRouter.post('/login', controllerLogin);
myRouter.post('/user', controllerUser);
myRouter.post('/categories', middwareValidToken, controllerInsertCategory);
myRouter.post('/post', controllerInsertPost);
myRouter.get('/user', middwareValidToken, controllerGetUser);
myRouter.get('/user/:id', middwareValidToken, controllerGetUserById);
myRouter.get('/categories', middwareValidToken, controllerGetCategories);

module.exports = {
  myRouter,
};