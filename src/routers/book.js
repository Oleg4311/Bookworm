const express = require('express');

const router = express.Router();

const { Book } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const BookComponent = require('../views/Book');

router.get('/:id', async (req, res) => {
  const userName = req.session?.username;
  console.log('=====================================================================')
  const { id } = req.params;
  console.log(id);
  try {
    const book = await Book.findOne({ where: { id } });
    renderTemplate(BookComponent, { book, userName }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

module.exports = router;
