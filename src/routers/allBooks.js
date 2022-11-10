const express = require('express');

const router = express.Router();

const { Book, Raiting } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const raitings = await Raiting.findAll({ raw: true });
    // console.log('2222222222222222222222222222222',raitings);
    const books = await Book.findAll({ raw: true });
    renderTemplate(Main, { books, userName, raitings }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

module.exports = router;
