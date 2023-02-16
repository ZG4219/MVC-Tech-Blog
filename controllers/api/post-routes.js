const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a post by its ID
router.put('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    if (post.user_id !== req.session.user_id) {
      res.status(403).json({ message: 'You are not authorized to edit this post!' });
      return;
    }

    const updatedPost = await post.update(req.body);

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a post by its ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    if (post.user_id !== req.session.user_id) {
      res.status(403).json({ message: 'You are not authorized to delete this post!' });
      return;
    }

    await post.destroy();

    res.status(200).json({ message: 'Post deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
