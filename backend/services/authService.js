
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// ...existing code...

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// ...existing code...