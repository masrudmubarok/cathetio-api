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

/**
 * @desc Update a task
 * @route PUT /tasks/:id
 * @access Public
 */
exports.updateTask = asyncHandler(async (req,res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found',
        });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    const updateTask = await task.save();

    res.status(200).json({
        success: true,
        data: updateTask,
        message: 'Task updated successfully',
    });
});

/**
 * @desc Delete a task
 * @route DELETE /tasks/:id
 * @access Public
 */
exports.deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found',
        });
    }

    await task.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Task deleted successfully',
    });
});