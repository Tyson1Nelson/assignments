var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var bountiesSchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String,
});

module.exports = mongoose.model("bounty", bountiesSchema);
