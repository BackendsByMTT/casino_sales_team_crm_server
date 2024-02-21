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
        unique:true,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    incentive: {
        type: String,
        required: true,
    },
    totalSalary: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
;