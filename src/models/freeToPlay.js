const mongoose = require('mongoose');

const freeToPlaySchema = new mongoose.Schema({
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

const FreeToPlayModal = mongoose.model('freeToPlaySchema', freeToPlaySchema);

module.exports = FreeToPlayModal;