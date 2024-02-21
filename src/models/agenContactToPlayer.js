const mongoose = require('mongoose');

const AgentConatctToPlayerEntrySchema = new mongoose.Schema({
    timeStamp: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        unique: true,
        required: true,
    },
    agentName: {
        type: String,
        required: true,
    },
    systemNumber: {
        type: String,
        required: true,
    },
    agentFbAccount: {
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

const AgentConatctToPlayerModal = mongoose.model('PlayerContactEntrySchema', AgentConatctToPlayerEntrySchema);

module.exports = AgentConatctToPlayerModal;
