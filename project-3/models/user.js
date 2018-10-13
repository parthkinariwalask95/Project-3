const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   email: { type: String, required: true, match: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" },
   avatarUrl: { type: String, required: true },
   aboutMeKeywords: { type: Array, required: true },
   contactNumber: { type: String, required: true, match: "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" },
   lookingFor: { type: Array, required: true },
   description: { type: String, required: true },
   Name: { type: String, required: true },
    Gender: { type: String, required: true },
    Age: { type: String, required: true },
    City: { type: String, required: true }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;