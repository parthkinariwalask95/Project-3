const express = require("express");
const router = express.Router();

// @route  GET api/profile/test
// @desc Test post routes
// @public route
router.get("/test", (req, res) => res.json({ message: "profile works" }));

module.exports = router;
