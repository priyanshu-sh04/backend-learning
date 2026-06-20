// server ko create karna 

const express = require('express');
const noteModel = require('./models/note.model')

const app = express();  // instance of express
app.use(express.json()); // middleware to use req.body

/*
crud opertions in database

POST /notes - Create a note
GET /notes - Get all notes
DELETE /notes/:id - Delete a note
PATCH /notes/:id - update a note

*/

app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        tittle: data.tittle,
        descrpition: data.descrpition,
    })
    res.status(201).json({
        message: "Note created in DB"
    })

})

app.get('/notes', async (req, res) => {

    const notes = await noteModel.find() // this will get you all the data in array
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:id', async (req, res) => {

    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch('/notes/:id', async(req, res) => {
    const id = req.params.id
    const tittle = req.body.tittle

    await noteModel.findOneAndUpdate({_id: id}, {tittle: tittle})
    res.status(200).json({
        message: "Note updates successfully"
    })
})

















// // store the data in notes array using http method or we can say crud opertions 
// const notes = []
// app.use(express.json()) // middleware haii jo express ko able banayega json data read karne ke liye

// // need to provide title and description - (by user)

// app.post('/notes', (req, res) => {
//     notes.push(req.body)
//     res.status(201).json({
//         message: "note created successfully"
//     })

// })

// app.get('/notes', (req, res) => {
//     res.status(200).json({
//         message: "notes fetch successfully",
//         notes: notes
//     })

// })
// /*  delete/notes/1(index)  */
// app.delete('/notes/:index', (req, res) => {
//     const index = req.params.index /* index value 1*/
//     delete notes[index]
//     res.status(200).json({
//         message: "note deleted successfully"
//     })

// })

// app.patch('/notes/:index', (req, res) => {

//     const index = req.params.index
//     const description = req.body.description

//     // if (!notes[index]) {
//     //     return res.status(404).json({ message: "Note not found" });
//     // }
//     notes[index].description = description

//     res.status(200).json({
//         message: " notes update successfully"
//     })
// })



module.exports = app



