const mongoose = require('mongoose');

const PlayerContactToAgentEntrySchema = new mongoose.Schema({
    agentName: {
        type: String,
        required: true,
    },
    palyerId: {
        type: String,
        unique: true,
        required: true,
    },
    gameName: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    agentAccountName: {
        type: String,
        required: true,
    },
    date: {
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

const PlayerContactToAgentModal = mongoose.model('PlayerContactEntrySchema', PlayerContactToAgentEntrySchema);

module.exports = PlayerContactToAgentModal;
