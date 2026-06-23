const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(["1.1.1.1", "1.0.0.1"]);

async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected Succesfully");
        
    } catch (error) {
        console.log("Database connection Error:", error);
        
    }
    
}

module.exports = connectDB;