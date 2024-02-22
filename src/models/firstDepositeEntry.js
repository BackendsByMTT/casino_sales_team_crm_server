const mongoose = require('mongoose');

const firstDepositeEntrySchema = new mongoose.Schema({
    entryBy: {
        type: String,
        required: true
    },
    agentName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        unique: true,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    gameName: {
        type: String,
        required: true,
    },
    amountOfCoin: {
        type: String,
        required: true,
    },
    accountName: {
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

const FirstDepositeEntryModal = mongoose.model('firstDepositeEntrySchema', firstDepositeEntrySchema);

module.exports = FirstDepositeEntryModal;