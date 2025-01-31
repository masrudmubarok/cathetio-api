const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const taskRoute = require('./routes/taskRoutes');

// DB Connection
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './env' });

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Logging in development mode
if (process.env.MODE === 'development') {
    app.use(morgan('dev'));
}

// API Routes
app.get('/', (req, res) => {
    res.send('API is running successfully');
});

app.use('/tasks', taskRoute);

// Set Port and Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
});