var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project3-test";
// ---create mongo database--
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    //   console.log("Database created!");
    //   db.close();
    // });
    //----------------------------------------------------------------------------------------------------
    // ----create collection-----
    // MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("project3-test");
    //   dbo.createCollection("testapp", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    //   });
    // });

    // -------- insert into collection
    var dbo = db.db("project3-test");

    var userobj = { name: "Mark", address: "Highway 37", phonenumber: "770 987 3245" };
    dbo.collection("users").insertOne(userobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});