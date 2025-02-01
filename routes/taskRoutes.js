const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.route('/')
    .get(getTasks)  // Mengambil semua task
    .post(createTask);  // Membuat task baru

router.route('/:id')
    .put(updateTask)  // Mengupdate task berdasarkan ID
    .delete(deleteTask);  // Menghapus task berdasarkan ID

module.exports = router;