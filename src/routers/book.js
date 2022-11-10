const express = require('express');

const router = express.Router();

const { Book, Raiting, Comment } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const BookComponent = require('../views/Book');

router.get('/:id', async (req, res) => {
  const userName = req.session?.username;
  const { id } = req.params;
  try {
    const comment = await Comment.findAll({ where: { bookId: id }, raw: true });
    const comments = [];
    for (let i = 0; i < comment.length; i++) {
      const a = comment[i].comments;
      comments.push(a);
    }
    const book = await Book.findOne({ where: { id } });
    renderTemplate(BookComponent, { book, userName, comments }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    comments,
  } = req.body;
  console.log(req.body);
  try {
    if (comments !== '') {
      await Comment.create({
        comments, bookId: id,
      });
      res.redirect(`/book/${id}`);
    }
  } catch (error) {
    res.send(`Error ----> ${error}`);
  }
});

module.exports = router;
