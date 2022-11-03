const { serviceLogin, serUser } = require('../services/serviceUser');

const controllerLogin = async (req, res) => {
  const { email, password } = req.body;
  const person = await serviceLogin(email, password);
  if (person === 400) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  } if (person === 401) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ 
    token: person });
};

const controllerUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await serUser(displayName, email, password, image);
  if (user === 400) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  } if (user === 401) {
    return res.status(409).json({ 
      message: 'User already registered' });
  } if (user === 402) {
    return res.status(400).json({ 
      message: '"email" must be a valid email' });
  } if (user === 403) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  res.status(201).json({ token: user });
};

module.exports = {
  controllerLogin,
  controllerUser,
};