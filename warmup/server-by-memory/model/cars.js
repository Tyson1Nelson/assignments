var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carSchema = new Schema ({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: Number,
    engine: String,
    miles: Number
});

module.exports = mongoose.model("Car", carSchema);