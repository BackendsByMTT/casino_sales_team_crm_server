const User = require("../../../models/userModel");
const { asyncHandler } = require("../../../utils/helpers/errorHelper");

const employees = asyncHandler(async (req, res) => {
  const users = await User.aggregate([
    {
      $group: {
        _id: "$department",
        users: {
          $push: {
            userName: "$userName",
            email: "$email",
            address: "$address",
            phoneNumber: "$phoneNumber",
          }
        }
      }
    }
  ]);
  return users
}
)

const userRegistration = asyncHandler(async (req, res) => {
  console.log("regggggg")

  const {
    userName,
    password,
    email,
    isActive,
    phoneNumber,
    address,
    designation,
  } = req.body



  if (await User.findOne({ email })) {
    console.log("kk")
    return res.status(201).json({ error: "This email already registered" });

  }

  console.log("1")
  const user = await User.create({
    userName,
    password,
    email,
    isActive,
    phoneNumber,
    address,
    designation,
    onModel: designation
  });

  return res.status(200).json(user);

})

module.exports = { userRegistration, employees }
