const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api', taskRoutes);

module.exports = app;