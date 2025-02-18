// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//handle the request to get all comments
router.get('/', commentController.getAllComments);

//handle the request to get all comments for a specific post
router.get('/:post_id', commentController.getCommentsByPostId);

//handle the request to create a new comment for a specific post
router.post('/:post_id', commentController.createComment);

//handle the request to update a comment
router.put('/:comment_id', commentController.updateComment);

//handle the request to delete a comment
router.delete('/:comment_id', commentController.deleteComment);

module.exports = router;