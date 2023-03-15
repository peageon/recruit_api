const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true,
        trim: true,
        minLength: [3, "Username must be at least 3 characters long"],
        maxLength: [15, "Username must be at most 15 characters long"],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    },
    created: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('User', userSchema);