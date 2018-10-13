const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");

router.route("/")
    .post(signUpController.signUp);

module.exports = router;