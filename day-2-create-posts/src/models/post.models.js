const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String, // convert image into uri then provide to DB
    caption: String,
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel;