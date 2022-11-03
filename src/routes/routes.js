const { Router } = require('express');
const { controllerLogin, controllerUser } = require('../controllers/controlUser');

const myRouter = Router();

myRouter.post('/login', controllerLogin);
myRouter.post('/user', controllerUser);

module.exports = {
  myRouter,
};