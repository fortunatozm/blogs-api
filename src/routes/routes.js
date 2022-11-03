const { Router } = require('express');
const { 
  controllerLogin,
  controllerUser,
  controllerGetUser,
  controllerGetUserById } = require('../controllers/controlUser');

const { middwareValidToken } = require('../middwares/token');

const myRouter = Router();

myRouter.post('/login', controllerLogin);
myRouter.post('/user', controllerUser);
myRouter.get('/user', middwareValidToken, controllerGetUser);
myRouter.get('/user/:id', middwareValidToken, controllerGetUserById);

module.exports = {
  myRouter,
};