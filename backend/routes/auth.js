// ===== routes/auth.js =====
const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController'); // import functions
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser); // New Logout Route 

module.exports = router;