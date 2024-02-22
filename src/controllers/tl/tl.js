const { asyncHandler } = require("../../utils/helpers/errorHelper");
const TlEntriesModal = require("../../models/tlEntries");


const tlEntries = asyncHandler(async (req, res) => {

  const {
    entryBy,
    time,
    date,
    customerName,
    gameName,
    amount,
    accoutnName,
    remark
  } = req.body

  console.log("1")

  const user = await TlEntriesModal.create({
    entryBy,
    time,
    date,
    customerName,
    gameName,
    amount,
    accoutnName,
    remark

  });

  employees(req, res)

})




module.exports = { tlEntries }
