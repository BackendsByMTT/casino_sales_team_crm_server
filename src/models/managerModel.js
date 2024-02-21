const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    shift: {
        type: String,
        required: true,
        enum:['day','night','common']
    },
 
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
