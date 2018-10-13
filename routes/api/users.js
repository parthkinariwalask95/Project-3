const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load user model
const User = require("../../models/User");

// @route  GET api/users/test
// @desc Test post routes
// @public route
router.get("/test", (req, res) => res.json({ message: "users works" }));

// @route  POST api/users/register
// @desc Register user
// @public route
router.post("/register", (req, res) => {
  //validation bought from validation/register.js
  //This basically uses validate RegisterInut function to validate user input
  //destructuring
  const { errors, isValid } = validateRegisterInput(req.body);

  //if the user input is not valid
  if (!isValid) {
    res.status(400).json(errors);
  }

  //Check if the user with this email already exists
  User.findOne({ email: req.body.email })
    //Returns user
    .then(user => {
      //Check if a user is returned
      //if user is returned it means user already exists .˙. send status 400 with json email already exists
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);

        // return res.status(400).json({ email: "Email already exists" });
        //If the email does not already exist in the db proceed to creating a new user
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: req.body.avatar,
          password: req.body.password,
          password2: req.body.password2
        });

        //Bcrypt will generate salt and hash password inside it
        bcrypt.genSalt(10, (err, salt) => {
          //takes newUser password mix with salt and spits back a hash password as hash
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            //if error occors throws err
            if (err) throw err;
            //else substitutes hash password as a new user password
            newUser.password = hash;

            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

// @route  POST api/users/login
// @desc Returing json web token
// @public route
router.post("/login", (req, res) => {
  //validation bought from validation/register.js
  //This basically uses validate RegisterInut function to validate user input
  //destructuring
  const { errors, isValid } = validateLoginInput(req.body);

  //if the user input is not valid
  if (!isValid) {
    res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user with email
  //In es 7 we can use just email insted of email:email - coz key value name is same
  User.findOne({ email: email }).then(user => {
    if (!user) {
      errors.email = "user not found";
      return res.status(404).json(errors);
      //return res.status(404).json({ email: "user email not found" }); - this was used first
    }

    //If user is found check password
    //user.password is a hased password in the data base. coz if the user is found we have access to that
    //bcrypt.compare compares the password user just entered with the hased password in the collection
    bcrypt
      .compare(password, user.password)
      //matched or not matched gives us true or false
      .then(isMatched => {
        if (isMatched) {
          //success msg is sent for test only, in real world we will send a webtoken
          // res.json({ msg: "Success" });
          // When the user is matched
          //1. create a JWT payload ( when the user is matched following pay load is created)
          const payload = {
            id: user.id,
            name: user.name,
            avatar: user.avatar
          };
          // 1. Sign a token ( not suere why secret or key is there, this is retrived from config/keys.js)
          //ExpiresIn willl kick out user - 3600 s will kick out in an hour
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                //Brearer is a protocl to format token
                //This token will be used to validate user and give access to the protoceted routes
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);

          //   return res.status(400).json({ password: "password incorrect" });
        }
      });
  });
});

//This is a route which logged in user are authorized
// @route  GET api/users/current
// @desc Returing current user
// @private route
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
