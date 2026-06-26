const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })) // form se data aayega
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // url se data aayega
app.use(express.static("public")) // kisi assits (file , photo)ko store karne ho toh 
app.use(cookieParser())


module.exports = app