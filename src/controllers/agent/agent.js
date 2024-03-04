const { asyncHandler } = require("../../utils/helpers/errorHelper");
const FreeToPlayModal = require("../../models/freeToPlay");
const FreshMessageModal = require("../../models/freshMessagesModel");
const FirstDepositeEntryModal = require("../../models/firstDepositeEntry");



const getFreshMessages = asyncHandler(async (req, res) => {

    const freshMessages = await FreshMessageModal.find({})

    return res.status(200).json(freshMessages)

})


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

    getFreshMessages(req, res)

})

const getFreeToPlay = asyncHandler(async (req, res) => {


    const freeToPlayAccounts = await FreeToPlayModal.find({})

    return res.status(200).json(freeToPlayAccounts)

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

const getFirstDepositeEntry = asyncHandler(async (req, res) => {

    console.log("getFirstDeposite", req.body)
    const firstDepositeEntries = await FirstDepositeEntryModal.find({})

    return res.status(200).json(firstDepositeEntries)

})

const firstDepositeEntry = asyncHandler(async (req, res) => {


    console.log("firstDeposteEntry", req.body)

    const {
        entryBy,
        agentName,
        date,
        customerName,
        gameName,
        amountOfCoin,
        accountName,
        remark
    } = req.body

    const firstDepositeNewEntry = await FirstDepositeEntryModal.create({
        entryBy,
        agentName,
        date,
        customerName,
        gameName,
        amountOfCoin,
        accountName,
        remark
    });

    const firstDepositeEntries = await FirstDepositeEntryModal.find({})

    return res.status(200).json(firstDepositeEntries)

})


module.exports = { getFirstDepositeEntry, getFreeToPlay, getFreshMessages, freshMessages, freeToPlay, firstDepositeEntry }
