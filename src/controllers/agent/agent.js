const { asyncHandler } = require("../../../utils/helpers/errorHelper");
const PlayerContactToAgentModal = require("../../models/playerConatctToAgent");
const AgentConatctToPlayerModal = require("../../models/agenContactToPlayer");


const addPlayerEntry = asyncHandler(async (req, res) => {

    const {
        timeStamp,
        date,
        agentName,
        systemNumber,
        agentFbAccount,
        recieverId,
        remark
    } = req.body

    const user = await AgentConatctToPlayerModal.create({
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

const playerContactToAgent = asyncHandler(async (req, res) => {

    const {
        timeStamp,
        date,
        agentName,
        systemNumber,
        agentFbAccount,
        recieverId,
        remark
    } = req.body

    const user = await PlayerContactToAgentModal.create({
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



module.exports = {addPlayerEntry,playerContactToAgent}





module.exports = { userRegistration }
