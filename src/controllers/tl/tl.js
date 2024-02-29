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

  console.log("1", req.body)

  // const newEntry = await TlEntriesModal.create({
  //   entryBy,
  //   time,
  //   date,
  //   customerName,
  //   gameName,
  //   amount,
  //   accoutnName,
  //   remark

  // });

  // const tlEntries = await TlEntriesModal.find({})

  return res.status(200).json({ mess: "sucess" })

})

module.exports = { tlEntries }
