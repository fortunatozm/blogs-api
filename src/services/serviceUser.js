const { User } = require('../models/index');
const { createToken } = require('../functions');

const serviceLogin = async (email, password) => {
  if (email && password) {
    const finded = await User.findOne({ where: { email, password } });
    if (finded !== null) {
      const { password: _, ...findedSemPassword } = finded.dataValues;
      return createToken(findedSemPassword);
    } return 401;
    } return 400;
};

const ValidDisplayName = (displayName) => {
  if (displayName.length < 8) {
    return 400;
  }
};

const ValidDisplayEmail = async (emailIn) => {
  // https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469
  const reult = await User.findOne({ where: { email: emailIn } });
  const valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  console.log('esta aqui');

  if (valid.test(emailIn) === false) {
    return 402;
  }

  if (reult !== null) { 
    const { dataValues: { email } } = reult;
    if (email === emailIn) {
      return 401;
    }
  }
};

const ValidPassword = (password) => {
  if (password.length < 6) {
    return 403;
  }
};

const serUser = async (displayName, email, password, image) => {
  const emailvalid = await ValidDisplayEmail(email);
  const nameValid = ValidDisplayName(displayName);
  const passwordValid = ValidPassword(password);
  // await ValidDisplayEmail(email);
  // ValidDisplayName(displayName);
  // ValidPassword(password);
  console.log('Retorno das funções', emailvalid, nameValid, passwordValid);
  if (emailvalid === 401) {
    return 401;
  } if (emailvalid === 402) {
    return 402;
  } if (passwordValid === 403) {
    return 403;
  } if (nameValid === 400) {
    return 400;
  } {
    const created = await User.create({ displayName, email, password, image });
    const { password: _, ...createdSemPassword } = created.dataValues;
    return createToken(createdSemPassword); }
};

const serviceGetAllUsers = async () => {
  const data = await User.findAll();
  const dados = data.map(({ dataValues: { 
    id, displayName, email, image } }) => ({ id, displayName, email, image }));
  return dados;
};

const serviceGetUserById = async (idIn) => {
  const finded = await User.findOne({ where: { id: idIn } });
  if (idIn) {    
    if (finded !== null) {
      const { password: _, ...findedSemPassword } = finded.dataValues;
      return findedSemPassword;
    } return 401;
  } return 400;
};

module.exports = {
  serviceLogin,
  serUser,
  serviceGetAllUsers,
  serviceGetUserById,
};