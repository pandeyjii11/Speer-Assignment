const express = require("express");
const router = express.Router();

// import all the controllers
const {getAllNotes, getNotedById, createNote, updateNote, deleteNote, shareNotes, searchNote} = require("../Controllers/Notes");

// import all the middlewares
const {auth} = require("../Middlewares/auth");

// Create all the routes
// GetAllNotes ofthe authenticated user
router.get("/notes", auth, getAllNotes);

// getNoteById for the authenticated user
router.get("/notes/:id", auth, getNotedById);

// Create note for the authenricated user
router.post("/notes", auth, createNote);

// Update an existing note for the authenticated user
router.put("/notes/:id", auth, updateNote);

// Delete note for authenticated user
router.delete("/notes/:id", auth, deleteNote);

// Share the note with another user
router.post("/notes/:id/share", auth, shareNotes);

// Search the notes based on keuwords using text indexing
router.get("/seacrh", auth, searchNote);


// Export router
module.exports = router;