const mongoose = require('mongoose');

const CoinSheetSchema = new mongoose.Schema({
    entryBy: {
        type: String,
        required: true
    },
    initialCoin: {
        type: String,
        required: true
    },
    spend: {
        type: String,
        required: true,
    },
    remaining: {
        type: String,
        required: true,
    },
    incentive: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

const CoinSheetModal = mongoose.model('CoinSheetSchema', CoinSheetSchema);

module.exports = CoinSheetModal;
