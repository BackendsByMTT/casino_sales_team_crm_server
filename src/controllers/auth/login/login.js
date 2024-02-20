const { JWT_SECRET } = require("../../../config/envVars");
const User = require("../../../models/tlModel");
let jwt = require('jsonwebtoken');
const { asyncHandler } = require("../../../utils/helpers/errorHelper");

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body
  const user = await User.findOne({ email });

  if (!user)
    return res.status(201).json({ error: "Yor are not registered" });

  if (password != user.password)
    return res.status(201).json({ error: "Wrong credentials" });
  console.log("login", user)

  const token = jwt.sign({ email }, JWT_SECRET);

  return res.status(200).json({ email, token });

})

module.exports = { loginUser }