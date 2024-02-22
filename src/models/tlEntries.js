const mongoose = require('mongoose');

const TlEntriesSchema = new mongoose.Schema({
    entryBy: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    customerName: {
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
    accoutnName: {
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

const TlEntriesModal = mongoose.model('TlEntriesSchema', TlEntriesSchema);

module.exports = TlEntriesModal;
