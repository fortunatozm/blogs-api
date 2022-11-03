const { validToken } = require('../functions');

const middwareValidToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const valid = validToken(authorization);
    console.log(valid);
    if (valid === 'Token inválido') {
      res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  } else {
    const resp = 'Token not found';
    res.status(401).json({ message: resp });
  }
};

module.exports = { middwareValidToken };