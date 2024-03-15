const mongoose = require('mongoose');

const AccountRecordSchema = new mongoose.Schema({
    entryBy: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
    date:{
        type:String
    },
    status: {
        type: String,
        required: true,
    },
    fbAccountLink: {
        type: String,
        required: true,
    },
    agentNameOfFbAccount: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

const AccountRecordModal = mongoose.model('AccountRecordSchema', AccountRecordSchema);

module.exports = AccountRecordModal;
