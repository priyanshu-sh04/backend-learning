// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import app from "./src/app.js";
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERR", error);
        throw error; 
    })
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
        
    })
}) 
.catch((error) => {
    console.log("MongoDb connection failed", error);
    

})
