const mongoose = require('mongoose');
const { unique } = require('joi-browser');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    description: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 255,
    },
    importance: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.models.Note || mongoose.model("Note", noteSchema);