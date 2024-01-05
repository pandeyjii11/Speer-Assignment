const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
    {
        heading: {
            type: String
        },
        description: {
            type: String,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        userList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
);

notesSchema.index(
    {
        heading: 'text',
        description: 'text'
    }
);

module.exports = mongoose.model("Notes", notesSchema);