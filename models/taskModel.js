const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ['complete', 'incomplete'], 
        default: 'incomplete' 
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;