const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' });
return token;
};

const validToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);
    console.log('Aqui');
    return data;
  } catch (error) {
    const e = 'Token inválido';
    return e;
  }
};

module.exports = { createToken, validToken };