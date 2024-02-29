const { freshMessages, freeToPlay, firstDepositeEntry } = require("../controllers/agent/agent");
const { loginUser } = require("../controllers/auth/login/login");
const { userRegistration } = require("../controllers/auth/register/register");
const { accesControl, updateUser } = require("../controllers/bigBoss/bigBoss");
const { balanceSheet, coinSheet, accountRecord } = require("../controllers/manager/manager");
const { tlEntries } = require("../controllers/tl/tl");
const { verifyToken } = require("../middleware/tokenVerification");

const router = require("express").Router();

router.get("/test", (req, res) => res.status(200).json({ mssage: "working" }))

router.post("/api/auth/register", userRegistration)
router.post("/api/auth/login", loginUser)

router.post("/api/configure/accesControl",accesControl)
router.post("/api/configure/updateUser",updateUser)

router.post("/api/manager/balanceSheet", balanceSheet)
router.post("/api/manager/coinSheet", coinSheet)
router.post("/api/manager/accountRecords", accountRecord)

router.post("/api/tl/tlEntries",verifyToken, tlEntries)

router.post("/api/agent/freshMessages", freshMessages)
router.post("/api/agent/freeToPlay", freeToPlay)
router.post("/api/agent/firstDepositeEntry", firstDepositeEntry)


module.exports = router