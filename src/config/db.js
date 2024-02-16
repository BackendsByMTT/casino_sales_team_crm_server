const mongoose = require("mongoose");
const { MONGO_URI } = require("./envVars");

const connectDB = async () => {
  try {
    const uri = MONGO_URI;
    await mongoose
      .connect(uri).then(()=>console.log("Database successfully connected"))
      .catch((error) => console.log(error));

    const connection = mongoose.connection;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;