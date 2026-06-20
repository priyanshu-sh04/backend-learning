const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "1.0.0.1"]);

async function connectDB(uri) {
   try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
   } catch (err) {
      console.error("MongoDB Error:");
      console.error(err);
   }
}

module.exports = connectDB;