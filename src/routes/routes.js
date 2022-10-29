const { Router } = require('express');
const { controllerLogin } = require('../controllers/controlUser');

const myRouter = Router();

myRouter.post('/login', controllerLogin);

module.exports = {
  myRouter,
};