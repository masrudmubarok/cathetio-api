const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');

/**
 * @desc Create a new task
 * @route POST /tasks
 * @access Public
 */
exports.createTask = asyncHandler(async (req, res) => {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        });
    }

    const task = await Task.create({ title, description, status });

    res.status(201).json({
        success: true,
        data: task,
        message: 'Task created successfully',
    });
});

/**
 * @desc Get all tasks
 * @route GET /tasks
 * @access Public
 */
exports.getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({
        success: true,
        data: tasks,
        message: 'Tasks retrieved successfully',
    });
});
