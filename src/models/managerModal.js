const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    shift: {
        type: String,
        required: true,
        enum:['day','night','common']
    },
 
},
    {
        timestamps: true
    });

const ManagerModal = mongoose.model('managerSchema', managerSchema);

module.exports = ManagerModal;
