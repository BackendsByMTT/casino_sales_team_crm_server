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
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['RoleModel1', 'RoleModel2', 'RoleModel3']  // List of possible models
    }
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
