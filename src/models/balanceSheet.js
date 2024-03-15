const mongoose = require('mongoose');

const BalanceSheetSchema = new mongoose.Schema({
    entryBy: {
        type: String,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
    },
    employeeEmail: {
        type: String,
        unique: true,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    date:{
        type:String
    },
    incentive: {
        type: String,
        required: true,
    },
    totalSalary: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

const BalanceSheetModal = mongoose.model('BalanceSheetSchema', BalanceSheetSchema);

module.exports = BalanceSheetModal;
;