const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' });
return token;
};

module.exports = { createToken };