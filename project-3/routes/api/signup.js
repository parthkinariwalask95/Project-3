const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");
const adminController = require("../../controllers/adminController");

router.route("/")
    .post(signUpController.signUp);

router.route("/admin")
    .get(adminController.findAll);
module.exports = router;