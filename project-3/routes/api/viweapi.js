const router = require("express").Router();
const viewmatchcontroller = require("../../controllers/viewmatchcontroller");

// Matches with "/api/books"
router.route("/")
  .get(viewmatchcontroller.findAll);

router
  .route("/:id")
  .get(viewmatchcontroller.findById);  
module.exports = router;
