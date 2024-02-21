const { playerContactToAgent } = require("../controllers/agent/agent");
const { loginUser } = require("../controllers/auth/login/login");
const { userRegistration } = require("../controllers/auth/register/register");

const router = require("express").Router();

router.get("/test",(req,res)=>res.status(200).json({mssage:"working"}))

router.post("/api/auth/register",userRegistration)
router.post("/api/auth/login",loginUser)

router.post("/api/auth/updateUser",updateUser)
router.post("/api/auth/accesControl",accessControl)

router.post("/api/auth/agentContactToPlayer",playerContactToAgent)

router.post("/api/auth/playerContacToAgent",playerContactToAgent)
router.post("/api/auth/tlNewEntry",userRegistration)


module.exports = router