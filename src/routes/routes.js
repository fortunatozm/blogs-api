const { Router } = require('express');
const { 
  controllerLogin,
  controllerUser,
  controllerGetUser } = require('../controllers/controlUser');

const { middwareValidToken } = require('../middwares/token');

const myRouter = Router();

myRouter.post('/login', controllerLogin);
myRouter.post('/user', controllerUser);
myRouter.get('/user', middwareValidToken, controllerGetUser);

module.exports = {
  myRouter,
};