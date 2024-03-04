const { freshMessages, freeToPlay, firstDepositeEntry, getFirstDepositeEntry, getFreeToPlay, getFreshMessages } = require("../controllers/agent/agent");
const { loginUser } = require("../controllers/auth/login/login");
const { userRegistration } = require("../controllers/auth/register/register");
const { accesControl, updateUser } = require("../controllers/bigBoss/bigBoss");
const { balanceSheet, coinSheet, accountRecord, getBalanceSheet, getCoinSheet, getAccountRecord } = require("../controllers/manager/manager");
const { tlEntries, getTlEntries } = require("../controllers/tl/tl");
const { verifyToken } = require("../middleware/tokenVerification");

const router = require("express").Router();

router.get("/test", (req, res) => res.status(200).json({ mssage: "working" }))

router.post("/api/auth/register", userRegistration)
router.post("/api/auth/login", loginUser)

router.post("/api/configure/accesControl", accesControl)
router.post("/api/configure/updateUser", updateUser)

router.post("/api/manager/balanceSheet", verifyToken, balanceSheet)
router.post("/api/manager/coinSheet", verifyToken, coinSheet)
router.post("/api/manager/accountRecords", verifyToken, accountRecord)

router.post("/api/manager/getBalanceSheet", verifyToken, getBalanceSheet)
router.post("/api/manager/getCoinSheet", verifyToken, getCoinSheet)
router.post("/api/manager/getAccountRecords", verifyToken, getAccountRecord)

router.post("/api/tl/tlEntries", verifyToken, tlEntries)
router.post("/api/tl/gettlEntries", verifyToken, getTlEntries)


router.post("/api/agent/freshMessages", verifyToken, freshMessages)
router.post("/api/agent/freeToPlay", verifyToken, freeToPlay)
router.post("/api/agent/firstDepositeEntry", verifyToken, firstDepositeEntry)


router.post("/api/agent/getFreshMessages", verifyToken, getFreshMessages)
router.post("/api/agent/getFreeToPlay", verifyToken, getFreeToPlay)
router.post("/api/agent/getFirstDepositeEntry", verifyToken, getFirstDepositeEntry)

module.exports = router