const { asyncHandler } = require("../../utils/helpers/errorHelper");
const AccountRecordModal = require("../../models/accountRecords");
const BalanceSheetModal = require("../../models/balanceSheet");
const CoinSheetModal = require("../../models/coinSheet");


const getBalanceSheet = asyncHandler(async (req, res) => {

  const balanceSheet = await BalanceSheetModal.find({})
  return res.status(200).json(balanceSheet)

})

const getCoinSheet = asyncHandler(async (req, res) => {

  const coinSheet = await CoinSheetModal.find({})

  return res.status(200).json(coinSheet)


})

const getAccountRecord = asyncHandler(async (req, res) => {

  const accountRecords = await AccountRecordModal.find({})
  console.log("gteAccRec",accountRecords)

  return res.status(200).json(accountRecords)


})


const balanceSheet = asyncHandler(async (req, res) => {

  const {
    entryBy,
    employeeName,
    designation,
    employeeEmail,
    salary,
    incentive,
    totalSalary,
    review,
    date

  } = req.body

  console.log("1")

  const newBalance = await BalanceSheetModal.create({
    entryBy,
    employeeName,
    designation,
    employeeEmail,
    salary,
    incentive,
    totalSalary,
    review,
    date

  });

  getBalanceSheet(req, res)

})

const coinSheet = asyncHandler(async (req, res) => {

  const {
    date,
    entryBy,
    initialCoin,
    spend,
    remaining,
    incentive,

  } = req.body


  console.log("1")
  const newCoinEntry = await CoinSheetModal.create({
    date,
    entryBy,
    initialCoin,
    spend,
    remaining,
    incentive,
  });

  getCoinSheet(req, res)


})

const accountRecord = asyncHandler(async (req, res) => {

  const {
    entryBy,
    userName,
    password,
    status,
    date,
    fbAccountLink,
    agentNameOfFbAccount,

  } = req.body

  console.log("entryAccount TRecords",req.body)
  const newAccountRecord = await AccountRecordModal.create({
    date,
    entryBy,
    userName,
    password,
    status,
    fbAccountLink,
    agentNameOfFbAccount,

  });

  getAccountRecord(req, res)

})


module.exports = { balanceSheet,getAccountRecord,getBalanceSheet,getCoinSheet, coinSheet, accountRecord }
