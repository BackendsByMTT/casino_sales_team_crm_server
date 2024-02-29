const { asyncHandler } = require("../../utils/helpers/errorHelper");
const FreeToPlayModal = require("../../models/freeToPlay");
const FreshMessageModal = require("../../models/freshMessagesModel");
const FirstDepositeEntryModal = require("../../models/firstDepositeEntry");

const freshMessages = asyncHandler(async (req, res) => {

    const {
        entryBy,
        agentName,
        time,
        date,
        systemNumber,
        accountName,
        recieverId,
        remark
    } = req.body

    const newMessages = await FreshMessageModal.create({
        entryBy,
        agentName,
        time,
        date,
        systemNumber,
        accountName,
        recieverId,
        remark
    });

    const freshMessages = await FreshMessageModal.find({})

    return res.status(200).json(freshMessages)

})

const freeToPlay = asyncHandler(async (req, res) => {

    const {
        entryBy,
        agentName,
        time,
        date,
        systemNumber,
        accountName,
        recieverId,
        remark
    } = req.body

    const freePlayNewAccount = await FreeToPlayModal.create({
        entryBy,
        agentName,
        time,
        date,
        systemNumber,
        accountName,
        recieverId,
        remark
    });

    const freeToPlayAccounts = await FreeToPlayModal.find({})

    return res.status(200).json(freeToPlayAccounts)

})


const firstDepositeEntry = asyncHandler(async (req, res) => {

    const {
        timeStamp,
        date,
        agentName,
        systemNumber,
        agentFbAccount,
        recieverId,
        remark
    } = req.body

    const firstDepositeNewEntry = await FirstDepositeEntryModal.create({
        timeStamp,
        date,
        agentName,
        systemNumber,
        agentFbAccount,
        recieverId,
        remark
    });

    const firstDepositeEntries = await FirstDepositeEntryModal.find({})

    return res.status(200).json(firstDepositeEntries)

})


module.exports = { freshMessages, freeToPlay, firstDepositeEntry }
