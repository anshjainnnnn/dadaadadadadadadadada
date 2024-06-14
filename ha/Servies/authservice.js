const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/authConfig');

async function comparePasswords(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '1h' });
}

module.exports = {
  comparePasswords,
  generateToken
};
