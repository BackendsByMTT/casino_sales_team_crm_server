const { asyncHandler } = require("../../utils/helpers/errorHelper");
const FreeToPlayModal = require("../../models/freeToPlay");
const FreshMessageModal = require("../../models/freshMessagesModel");
const  FirstDepositeEntryModal= require("../../models/firstDepositeEntry");



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

    const user = await FreshMessageModal.create({
        entryBy,
        agentName,
        time,
        date,
        systemNumber,
        accountName,
        recieverId,
        remark
    });

    return user;

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

    const user = await FreeToPlayModal.create({
        entryBy,
        agentName,
        time,
        date,
        systemNumber,
        accountName,
        recieverId,
        remark
    });

    return user;

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

    const user = await FirstDepositeEntryModal.create({
        timeStamp,
        date,
        agentName,
        systemNumber,
        agentFbAccount,
        recieverId,
        remark
    });

    return user;

})


module.exports = { freshMessages, freeToPlay, firstDepositeEntry }
