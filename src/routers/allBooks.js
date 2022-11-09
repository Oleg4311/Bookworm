const express = require('express');

const router = express.Router();

const { Book } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const books = await Book.findAll({ raw: true });
    renderTemplate(Main, { books, userName }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

module.exports = router;
