const { serviceLogin } = require('../services/serviceUser');

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

module.exports = {
  controllerLogin,
};