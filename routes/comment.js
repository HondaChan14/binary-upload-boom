const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes
router.post("/createComment/:id", commentsController.createComment);
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment);
// parameters in path come from the req.params in our controller

module.exports = router;
