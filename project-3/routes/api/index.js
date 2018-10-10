const router = require("express").Router();
const signUpRoutes = require("./signup");

router.use("/signup", signUpRoutes);

module.exports = router;