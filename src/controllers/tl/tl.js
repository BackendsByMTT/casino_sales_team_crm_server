const { asyncHandler } = require("../../utils/helpers/errorHelper");
const TlEntriesModal = require("../../models/tlEntries");



const tlEntries = asyncHandler(async (req, res) => {

  const {
    entryBy,
    date,
    customerName,
    gameName,
    amount,
    accountName,
    remark
  } = req.body

  console.log("1", req.body)

  const newEntry = await TlEntriesModal.create({
    entryBy,
    time:"jh",
    date,
    customerName,
    gameName,
    amount,
    accountName,
    remark

  });

  const tlEntries = await TlEntriesModal.find({})

  return res.status(200).json(tlEntries)

})

module.exports = { tlEntries }
