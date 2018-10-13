const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ViewMatch = new Schema({
    Name: { type: String, required: true },
    Gender: { type: String, required: true },
    Age: { type: String, required: true },
    City: { type: String, required: true },
    // About_me: { type: String },
    // saved:{type:Boolean,default:false}
});

const View = mongoose.model("ViewMatch", ViewMatch);

module.exports = View;
