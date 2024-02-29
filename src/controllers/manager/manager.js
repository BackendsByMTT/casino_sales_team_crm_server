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

  const newBalance = await BalanceSheetModal.findOneAndUpdate({
    entryBy,
    employeeName: '123456789',
    designation,
    employeeEmail,
    salary,
    incentive,
    totalSalary,
    review

  });

  const balanceSheet = await BalanceSheetModal.find({})

  return res.status(200).json(balanceSheet)


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
  const newCoinEntry = await CoinSheetModal.findOneAndUpdate({
    entryBy,
    initialCoin: '123456789',
    spend,
    remaining,
    incentive,
  });

  const coinSheet = await CoinSheetModal.find({})

  return res.status(200).json(coinSheet)


})

const accountRecord = asyncHandler(async (req, res) => {

  const {
    entryBy,
    userName,
    password,
    status,
    fbAccountLink,
    agentNameOfFbAccount,

  } = req.body

  console.log("1")
  const newAccountRecord = await AccountRecordModal.findOneAndUpdate({
    entryBy,
    userName,
    password,
    status,
    fbAccountLink,
    agentNameOfFbAccount,

  });

  const accountRecords = await AccountRecordModal.find({})

  return res.status(200).json(accountRecords)


})


module.exports = { balanceSheet, coinSheet, accountRecord }
