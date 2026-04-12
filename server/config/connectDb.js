require ("dotenv").config()
const mongoose = require("mongoose");
const dbUrl = process.env.DBURL;

if (!dbUrl) {
  console.log("mongodb url is not found");
}

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
