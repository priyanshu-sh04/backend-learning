const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.models")

const app = express();
app.use(express.json()); //middelware for read json data from http method

const upload = multer({ storage: multer.memoryStorage()}) // middleware for reading file

app.post('/create-post', upload.single("image"), async (req, res) => {

    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    console.log(result);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get('/posts', async(req, res) => {

    const posts = await postModel.find()

    return res.status(200).json({
        message: "Post fetched successfully",
        posts
    })
})

module.exports = app;