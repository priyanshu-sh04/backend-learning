const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    tittle: String,
    descrpition: String,
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel