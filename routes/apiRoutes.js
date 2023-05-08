//  requesting all requirements for this file to work
const fs = require('fs');
const uniqid = require("uniqid");
const router = require('express').Router();

// setting up GET routes this will show all the notes in the db.json file
router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(notes);
});

// Setting up the POST route this will let you add the new notes to the db.json file
router.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));

    // Body of the notes
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    }

    // push new note to the json file
    notes.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
    
});

// Setting route to delete notes
router.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));

    //filtering through the notes the one's that are NOT getting deleted
    let updatedNotes = notes.filter(note => note.id != req.params.id);

    // Readding the not deleted notes to the db.jason file
    fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotes));
    res.json(updatedNotes);


})

module.exports = router;