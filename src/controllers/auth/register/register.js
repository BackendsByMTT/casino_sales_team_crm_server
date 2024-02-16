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
  return res.status(200).json(users);
}
)


const userRegistration = asyncHandler(async (req, res) => {

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
  const user = await User.create({
    userName,
    password: '123456789',
    email,
    department,
    address,
    phoneNumber,
    
  });

  employees(req, res)

})

module.exports = { userRegistration, employees }
