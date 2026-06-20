const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB("mongodb+srv://backend:qiPHR8wgqO3gQh8f@complete-backend.ewtjrdb.mongodb.net/haley")

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});