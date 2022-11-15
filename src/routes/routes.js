const { Router } = require('express');
const { 
  controllerLogin,
  controllerUser,
  controllerGetUser,
  controllerGetUserById,
  controllerDeleUserById } = require('../controllers/controlUser');

const { 
  controllerInsertCategory,
  controllerGetCategories,
 } = require('../controllers/controlCategories');

 const { 
  controllerInsertPost,
  controllerGetAllPosts,
  controllerGetPostById,
  controllerDelePostById,
  controllerSearchPost,
  controllerUpdatePostById,
} = require('../controllers/controlPosts');

const { middwareValidToken } = require('../middwares/token');

const myRouter = Router();

myRouter.post('/login', controllerLogin);
myRouter.post('/user', controllerUser);
myRouter.post('/categories', middwareValidToken, controllerInsertCategory);
myRouter.post('/post', middwareValidToken, controllerInsertPost);
myRouter.get('/user', middwareValidToken, controllerGetUser);
myRouter.get('/user/:id', middwareValidToken, controllerGetUserById);
myRouter.get('/categories', middwareValidToken, controllerGetCategories);
myRouter.get('/post', middwareValidToken, controllerGetAllPosts);
myRouter.get('/post/search', middwareValidToken, controllerSearchPost);
myRouter.get('/post/:id', middwareValidToken, controllerGetPostById);
myRouter.delete('/user/:me', middwareValidToken, controllerDeleUserById);
myRouter.delete('/post/:id', middwareValidToken, controllerDelePostById);
myRouter.put('/post/:id', middwareValidToken, controllerUpdatePostById);

module.exports = {
  myRouter,
};