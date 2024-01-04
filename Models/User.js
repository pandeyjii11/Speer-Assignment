const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        notes: [
            {
                type:  mongoose.Schema.Types.ObjectId,
                ref: "Notes",
            }
        ],
    }
);

module.exports = mongoose.model("User", userSchema);