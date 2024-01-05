const Notes = require("../Models/Notes");
const User = require("../Models/User");

exports.getAllNotes = async(req, res) => {
    try {
        // Fetch user id
        const userId = req.user.id;

        // Validate data
        if(!userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        // find user
        const user = await User.findById(userId);

        // no user found
        if(!user) {
            return res.status(404).json(
                {
                    success: false, 
                    message: "User Not Found",
                }
            );
        }

        // get notes
        const notes = user.notes;

        // Send a json response
        res.status(200).json(
            {
                success: true,
                message: "All noes for the authenticated user found",
                notes: notes,
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
            }
        );
    }
}

exports.getNotedById = async(req, res) => {
    try {
        // fetch data
        const notesId = req.params.id;
        const userId = req.user.id;

        // Vvalidate data
        if(!notesId || !userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        // Find user
        const user = await User.findById(userId);

        // Is no user found
        if(!user) {
            return res.status(404).json(
                {
                    success: false, 
                    message: "User Not Found",
                }
            );
        }

        const notes = user.notes;
        var index=-1;

        console.log(notesId);
        for(let i=0;i<notes.length;i++)
        {
            console.log(notes[i]._id);
            if(notesId == notes[i]._id)
            {
                index=i;
                break;
            }
        }

        if(index === -1)
        {
            return res.status(404).json(
                {
                    success: false,
                    message: "Notes not found",
                }
            );
        }

        const note = await Notes.findById(notes[index]);

        // send a json reponse
        res.status(200).json(
            {
                success: true,
                message: "Note found",
                notes: note,
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send a json response
        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
            }
        );
    }
}

exports.createNote = async(req, res) => {
    try {
        // fetch Data
        const {heading, description} = req.body;
        const userId = req.user.id;

        // Validate data
        if(!heading || !description || !userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        // Create a instance of the notes
        const notes = await Notes.create(
            {
                heading: heading,
                description: description,
                userId: userId,
                userList: userId,
                createdAt: Date.now(),
            }
        );

        // Add the notes to the user notesList
        const user = await User.findByIdAndUpdate(
            {
                _id: userId,
            },
            {
                $push: {
                    notes: notes,
                },
            },
            {
                new: true,
            },
        );

        // validate user
        if(!user) {
            return res.status(404).json(
                {
                    success: false,
                    message: "User Not Found",
                }
            );
        }

        // send updated user details and new note
        res.status(200).json(
            {
                success: true,
                message: "Note created sucessfully",
                notes: notes,
                updatedUser: user,
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send a json response
        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
            }
        );
    }
}

exports.updateNote = async(req, res) => {
    try {
        // fttch data
        const {heading, description} = req.body;
        const notedId = req.params.id;
        const userId = req.user.id;

        // Validate data
        if(!userId || !notedId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields are required",
                }
            );
        }

        // Find the note
        const note = await Notes.findById(notedId);

        if(!note) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Note no found",
                }
            );
        }

        // console.log(heading);

        if(heading) {
            note.heading=heading;
        }

        if(description) {
            note.description=description;
        }

        // Save the cahnged data in the DB
        await note.save();

        res.status(200).json(
            {
                success: true,
                updatedNote: note,
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send json reponse
        res.status(500).json(
            {
                success: false,
                message: "Internal Server error",
            }
        );
    }
}

exports.deleteNote = async(req, res) => {
    try {
        // fetch data
        const notesId = req.params.id;
        const userId = req.user.id;
        
        // Validate data
        if(!userId || !notesId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        // Find the note
        const note = await Notes.findByIdAndDelete(notesId);

        if(!note) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Note not found",
                }
            );
        }
        
        const userList = note.userList;
        for(let i=0;i<userList.length;i++)
        {
            const user = await User.findByIdAndUpdate(
                {
                    _id: userList[i],
                },
                {
                    $pull: {
                        notes: notesId,
                    }
                },
                {
                    new: true,
                }
            );
        }

        // Send json response
        res.status(200).json(
            {
                success: true,
                message: "Note deleted Successfully,"
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send a json response
        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
            }
        );
    }
}

exports.shareNotes = async(req, res) => {
    try {
        // Fetch Data
        const {receiverUserId} = req.body;
        const notesId = req.params.id;

        //Validate Data
        if(!receiverUserId || !notesId) {
            return res.status(400).json(
                {
                    success: false, 
                    message: "All fields required",
                }
            );
        }

        console.log(notesId);

        // Find the note to be shared
        const note = await Notes.findByIdAndUpdate(
            {
                _id: notesId,
            },
            {
                $push: {
                    userList: receiverUserId,
                }
            },
            {
                new: true,
            }
        );

        if(!note) {
            return res.status(404).json(
                {
                    success: false, 
                    message: "Note not found",
                }
            );
        }

        // Find receiver User
        const receiver = await User.findByIdAndUpdate(
            {
                _id: receiverUserId,
            },
            {
                $push: {
                    notes: notesId,
                }
            },
            {
                new: true,
            }
        );

        if(!receiver) {
            return res.status(404).json(
                {
                    success: flase,
                    message: "Receiver Not found",
                }
            );
        }

        // Update the userList in the notes
        // note.userList.push(receiverUserId);

        // Send a json response
        res.status(200).json(
            {
                success: true,
                message: "Notes shared successfully",
                reveiver: receiver,
                note: note,
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send a json response
        res.status(500).json(
            {
                success: false,
                message: "Internal Server Error",
            }
        );
    }
}

exports.searchNote = async(req, res) => {
    try {
        // Fetch Data
        const userId = req.user.id;
        const {q} = req.query;

        console.log(userId);
        console.log(q);

        // Validate data
        if(!userId || !q) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields required",
                }
            );
        }

        const searchResults = await Notes.find({$text: {$search: q}, userId: userId}).exec();

        // Send json response
        res.status(200).json(
            {
                success: true,
                message: "Successfully fetched  all the search results",
                searchResults: searchResults,
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error.message);

        // Send a json response
        res.status(500).json(
            {
                success: flase,
                message: "Internal Server Error",
            }
        );
    }
}