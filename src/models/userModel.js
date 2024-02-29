const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    userNextDetails: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ["tl", "agent", "manager"]  // List of possible models
    }
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
