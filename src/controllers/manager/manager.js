const User = require("../../../models/userModel");
const { asyncHandler } = require("../../../utils/helpers/errorHelper");

const updateManager = asyncHandler(async (req, res) => {

  const {
    userName,
    email,
    department,
    address,
    phoneNumber,

  } = req.body

  if (await User.findOne({ email })) {
    console.log("kk")
    return res.status(201).json({ error: "This email already registered" });

  }

  console.log("1")
  const user = await User.findOneAndUpdate({
    userName,
    password: '123456789',
    email,
    department,
    address,
    phoneNumber,
    role   

  });

  employees(req, res)

})


module.exports = { userRegistration }
