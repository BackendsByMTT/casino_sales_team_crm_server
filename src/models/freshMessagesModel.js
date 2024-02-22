const mongoose = require('mongoose');

const freshMessageSchema = new mongoose.Schema({
    entryBy: {
        type: String,
        required: true
    },
    agentName: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        unique: true,
        required: true,
    },
    systemNumber: {
        type: String,
        required: true,
    },
    accountName: {
        type: String,
        required: true,
    },
    recieverId: {
        type: String,
        required: true,
    },
    remark: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

const FreshMessageModal = mongoose.model('freshMessageSchema', freshMessageSchema);

module.exports = FreshMessageModal;
