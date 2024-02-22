const { asyncHandler } = require("../../utils/helpers/errorHelper");
const AccountRecordModal = require("../../models/accountRecords");
const BalanceSheetModal = require("../../models/balanceSheet");
const CoinSheetModal = require("../../models/coinSheet");

const balanceSheet = asyncHandler(async (req, res) => {

  const {
    entryBy,
    employeeName,
    designation,
    employeeEmail,
    salary,
    incentive,
    totalSalary,
    review

  } = req.body

  console.log("1")
  const user = await BalanceSheetModal.findOneAndUpdate({
    entryBy,
    employeeName: '123456789',
    designation,
    employeeEmail,
    salary,
    incentive,
    totalSalary,
    review

  });


})

const coinSheet = asyncHandler(async (req, res) => {

  const {
    entryBy,
    initialCoin,
    spend,
    remaining,
    incentive,

  } = req.body


  console.log("1")
  const user = await CoinSheetModal.findOneAndUpdate({
    entryBy,
    initialCoin: '123456789',
    spend,
    remaining,
    incentive,
  });


})

const accountRecord = asyncHandler(async (req, res) => {

  const {
    userName,
    email,
    department,
    address,
    phoneNumber,

  } = req.body

  console.log("1")
  const user = await AccountRecordModal.findOneAndUpdate({
    entryBy,
    userName,
    password,
    status,
    fbAccountLink,
    agentNameOfFbAccount,

  });


})


module.exports = { balanceSheet, coinSheet, accountRecord }
