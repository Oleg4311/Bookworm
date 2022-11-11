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
      const wrong = 'Пожалуйста заполните все поля, при незаполнение всех полей и отправки формы вас вернёт на главную страницу !';
      renderTemplate(CreateBook, { userName, wrong }, res);
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
      res.redirect('/');
      // const wrong = { title: 'Заполните все поля !' };
      // console.log(wrong);
      // renderTemplate(Wrong, wrong, res);
    }
  } catch (error) {
    res.send(`Error ----> ${error}`);
  }
});

module.exports = router;
