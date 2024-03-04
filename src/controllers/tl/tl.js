const { asyncHandler } = require("../../utils/helpers/errorHelper");
const TlEntriesModal = require("../../models/tlEntries");


const getTlEntries = asyncHandler(async (req, res) => {

  console.log("getTlEntr",req.body)

  const tlEntries = await TlEntriesModal.find({})

  return res.status(200).json(tlEntries)

})

const tlEntries = asyncHandler(async (req, res) => {

  console.log("tlEntries", req.body)

  const {
    entryBy,
    timeStamp,
    date,
    customerName,
    gameName,
    amount,
    accountName,
    remark
  } = req.body



  const newEntry = await TlEntriesModal.create({
    entryBy,
    time:timeStamp,
    date,
    customerName,
    gameName,
    amount,
    accountName,
    remark

  });
  getTlEntries(req,res)
})

module.exports = { tlEntries,getTlEntries}
