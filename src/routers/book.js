const express = require('express');

const router = express.Router();

const { Book } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const BookComponent = require('../views/Book');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ where: { id } });
    renderTemplate(BookComponent, { book }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

module.exports = router;
