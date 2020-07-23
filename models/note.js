const mongoose = require("mongoose");

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
	},
	category: {
		type: String,
		required: true,
	},
	check: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.models.Note || mongoose.model("Note", noteSchema);
