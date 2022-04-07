var express = require("express");
var router = express.Router();

var blogController = require("../controllers/blog");
/* GET home page. */
router.get("/", blogController.getAllPosts);

router.post("/", blogController.createAPost);

router.get("/:id/delete", blogController.deleteAPost);

// get record details
router.get("/:id/edit", blogController.editAPost);

// update record
router.post("/:id/edit", blogController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update

module.exports = router;
