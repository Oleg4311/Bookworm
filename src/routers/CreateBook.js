const express = require('express');

const router = express.Router();
const { Book } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const CreateBook = require('../views/CreateBook');

router.get('/', (req, res) => {
  try {
    const userName = req.session?.username;
    renderTemplate(CreateBook, { userName }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

router.post('/', async (req, res) => {
  const {
    picture, nameBook, author, comments,
  } = req.body;
  try {
    if (picture !== '' && nameBook !== '' && author !== '' && comments !== '') {
      await Book.create({
        picture, nameBook, author, comments,
      });
      res.redirect('/');
    } else {
      console.log('Заполните все поля.');
    }
  } catch (error) {
    res.send(`Error ----> ${error}`);
  }
});

module.exports = router;
