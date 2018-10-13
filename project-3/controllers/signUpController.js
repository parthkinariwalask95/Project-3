const db = require("../models");

module.exports = {
    signUp: function (req, res) {
        db.Users
            .create(req.body)
            .then(newUser => res.json(newUser))
            .catch(err => res.status(422).json(err));
    }
}