const { loginUser } = require("../controllers/auth/login/login");
const { userRegistration } = require("../controllers/auth/register/register");

const router = require("express").Router();

router.get("/test",(req,res)=>res.status(200).json({mssage:"working"}))

router.post("/api/auth/register",userRegistration)
router.post("/api/auth/login",loginUser)



module.exports=router