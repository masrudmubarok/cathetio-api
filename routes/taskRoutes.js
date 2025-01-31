const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');

router.route('/')
    .get(getTasks)  // Mengambil semua task
    .post(createTask);  // Membuat task baru

module.exports = router;