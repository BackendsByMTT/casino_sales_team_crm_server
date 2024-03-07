const { JWT_SECRET } = require("../../../config/envVars");
let jwt = require('jsonwebtoken');
const { asyncHandler } = require("../../../utils/helpers/errorHelper");
const User = require("../../../models/userModel");

const loginUser = asyncHandler(async (req, res) => {

  console.log("looogin", req.body)

  const { email, password } = req.body
  const user = await User.findOne({ email });

  if (!user)
    return res.status(201).json({ error: "Yor are not registered" });

  if (password != user.password)
    return res.status(201).json({ error: "Wrong credentials" });
  console.log("login", user)

  const token = jwt.sign({ email, designation: user.designation }, JWT_SECRET);

  return res.status(200).json({ email, token, designation:user.designation });

})

module.exports = { loginUser }