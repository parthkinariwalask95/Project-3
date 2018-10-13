const router = require("express").Router();
const articleRoutes = require("./viweapi");

router.use("/a", articleRoutes);

module.exports = router;