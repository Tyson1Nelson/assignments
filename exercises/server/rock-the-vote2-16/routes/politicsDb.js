var mongoose = require("mongoose");

var politicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: Number,
    comments: [String] 
});

module.exports = mongoose.model("politics", politicSchema);
