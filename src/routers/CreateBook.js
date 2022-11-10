const express = require('express');

const router = express.Router();
const { Book } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const CreateBook = require('../views/CreateBook');
const Wrong = require('../views/Wrong');

router.get('/', (req, res) => {
  try {
    const userName = req.session?.username;
    if (userName) {
      renderTemplate(CreateBook, { userName }, res);
    } else {
      const wrong = { title: 'Заполните все поля !' };
      renderTemplate(CreateBook, wrong, res);
    }
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
