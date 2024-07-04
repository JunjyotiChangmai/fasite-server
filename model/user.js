const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fatherName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    generation: {
        type: Number,
        required: false
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;


