const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3050;
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Database configuration
const db = require("./config/keys").mongoURI;

//Connection to mongo DB
mongoose
  .connect(db)
  .then(() => console.log("Connected to mongo db"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

//Use routes
app.use("/api/users/", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Listining to the port
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
