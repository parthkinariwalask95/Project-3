const mongoose = require("mongoose");
const db = require("../model");

// This file empties the Books collection and inserts the books below

mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/viewmatch"
);

const viewuser = [

 {
   name: "parth",
   Gender: "Male",
   Age:27,
   City:"Atlanta",
   About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
   img:"http://i.dailymail.co.uk/i/pix/2015/10/14/13/2D5FCD6A00000578-0-image-a-63_1444824208333.jpg"
 },
 {
    name: "yash",
    Gender: "Male",
    Age:25,
    City:"Atlanta",
    About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
    img:"https://tse2.mm.bing.net/th?id=OIP.h9iBA-1Qbppdf1nEtrmvFQHaJ4&pid=15.1&P=0&w=300&h=300"

  },
  {
    name: "Akash",
    Gender: "Male",
    Age:25,
    City:"Atlanta",
    About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
    img:"https://tse2.mm.bing.net/th?id=OIP.BiYVAVpXMy_eAYdSgJFixgHaHg&pid=15.1&P=0&w=300&h=300"
  },
  {
    name: "Akira",
    Gender: "Female",
    Age:22,
    City:"Atlanta",
    About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
    img:"https://pbs.twimg.com/media/CjM-mdAUkAAwufw.jpg"
  },
  {
    name: "parth",
    Gender: "Male",
    Age:27,
    City:"Atlanta",
    About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
    img:"http://i.dailymail.co.uk/i/pix/2015/10/14/13/2D5FCD6A00000578-0-image-a-63_1444824208333.jpg"
  },
  {
     name: "yash",
     Gender: "Male",
     Age:25,
     City:"Atlanta",
     About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
     img:"https://tse2.mm.bing.net/th?id=OIP.h9iBA-1Qbppdf1nEtrmvFQHaJ4&pid=15.1&P=0&w=300&h=300"
 
   },
   {
     name: "Akash",
     Gender: "Male",
     Age:25,
     City:"Atlanta",
     About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
     img:"https://tse2.mm.bing.net/th?id=OIP.BiYVAVpXMy_eAYdSgJFixgHaHg&pid=15.1&P=0&w=300&h=300"
   },
   {
     name: "Akira",
     Gender: "Female",
     Age:22,
     City:"Atlanta",
     About_me:"Some quick example text to build on the card title and make up the bulk of the card's content",
     img:"https://pbs.twimg.com/media/CjM-mdAUkAAwufw.jpg"
   }

];

db.View
 .remove({})
 .then(() => db.View.collection.insertMany(viewuser))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });