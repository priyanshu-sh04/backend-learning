require('dotenv').config();
const app = require('./src/app')
const connectDB = require('./src/db/db')

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
