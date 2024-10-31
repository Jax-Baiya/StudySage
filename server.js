// ===== server.js =====
const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const flashcardRoutes = require('./routes/flashcards');
const { protect } = require('./middleware/authMiddleware');
const aiRoutes = require('./routes/ai'); // Add this line to import AI routes

// Load environment variables
dotenv.config();
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY); // Debug log to confirm key is loaded

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/flashcards', flashcardRoutes); // Removed `protect` from here; added it per-route in `flashcards.js`
app.use('/api/ai', aiRoutes); // Add this line to use the AI routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
