//  requesting all requirements for this file to work
const path = require("path");
const router = require('express').Router();

// Setting up the GET route to show the notes page get required
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Setting up all the other routes to show the homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;