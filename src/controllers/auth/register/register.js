const ManagerModal = require("../../../models/managerModal");
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
  console.log("regggggg", req.body)

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

  let objId =""
  if(designation === "managerSchema")
     objId = await ManagerModal.create({shift:req.body.shift})

  console.log("1")
  const user = await User.create({
    userName,
    password,
    email,
    isActive,
    phoneNumber,
    address,
    userNextDetails:objId ||  null,
    designation,
    onModel: designation
  });

  return res.status(200).json({});

})

module.exports = { userRegistration, employees }
