import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const connectDB = async () => {
    try {
       const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
       console.log(`MongoDB connected !! ${connectInstance.connection.host}`);
       
        
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
        
        
    }

}

export default connectDB