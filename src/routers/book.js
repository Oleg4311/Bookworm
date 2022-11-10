const express = require('express');

const router = express.Router();

const { Book, Raiting } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const BookComponent = require('../views/Book');

router.get('/:id', async (req, res) => {
  const userName = req.session?.username;
  const { id } = req.params;
  //console.log(id);
  try {
    console.log('============== 2');
    const raiting = await Raiting.findAll({ where: { bookId: id }, raw: true });
    const comments = [];
    for (let i = 0; i < raiting.length; i++) {
      const a = raiting[i].comments;
      comments.push(a);
    }
    console.log(comments);
    //console.log(newComments);
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
      // await Raiting.create({
      //   raiting: 15, comments: kek, bookId: id,
      // });
      // res.redirect('/');
    } else {
      console.log('Заполните все поля.');
    }
  } catch (error) {
    res.send(`Error ----> ${error}`);
  }
});

module.exports = router;
