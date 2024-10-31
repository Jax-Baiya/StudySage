// ===== middleware/authMiddleware.js =====
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const NodeCache = require('node-cache');

// Initialize cache with a TTL of 600 seconds (10 minutes)
const userCache = new NodeCache({ stdTTL: 600 });

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const cachedUser = userCache.get(decoded.id);

      if (cachedUser) {
        req.user = cachedUser;
      } else {
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) {
          return res.status(401).json({ message: 'Not authorized, user not found' });
        }
        userCache.set(decoded.id, req.user);
      }

      // Invalidate the cache if user data changes
      req.user.on('save', () => {
        userCache.del(decoded.id);
      });

      console.log('User authenticated:', req.user._id); // Debug log
      next();
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(401).json({ message: 'Not authorized, token failed or malformed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

module.exports = { protect };
