const express = require("express");
const router = express.Router();

const { createPost, getAllPosts } = require("../controllers/Post");
const { addLike, unLikePost } = require("../controllers/Like");
const { createComment, deleteComment } = require("../controllers/Comment");

//mapping create
router.post("/createPost", createPost);
router.get("/getAllPosts", getAllPosts);
router.post("/addLike", addLike);
router.post("/unLikePost", unLikePost);
router.post("/createComment", createComment);
router.post("/deleteComment", deleteComment);

//exports
module.exports = router;
