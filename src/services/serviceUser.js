const { User } = require('../models/index');
const { createToken } = require('../functions');

// const serviceEmail = (email, password) => {

// };

const serviceLogin = async (email, password) => {
  if (email && password) {
    const finded = await User.findOne({ where: { email, password } });
    if (finded !== null) {
      const { password: _, ...findedSemPassword } = finded.dataValues;
      return createToken(findedSemPassword);
    } return 401;
    } return 400;
};

module.exports = {
  serviceLogin,
};