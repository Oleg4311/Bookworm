const express = require('express');

const router = express.Router();
const { Book } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const CreateBook = require('../views/CreateBook');

router.get('/', (req, res) => {
  try {
    renderTemplate(CreateBook, { }, res);
  } catch (error) {
    console.log('Ошибка:', error);
  }
});

router.post('/', async (req, res) => {
//   const newUser = req.session?.newUser;
  const {
    picture, nameBook, author, comments,
  } = req.body;
  try {
    // const user = await User.findOne({ raw: true, where: { email: newUser } });
    // const { id } = user;
    // console.log(id);

    await Book.create({
      picture, nameBook, author, comments,
    });
    res.redirect('/');
  } catch (error) {
    res.send(`Error ----> ${error}`);
  }
});

module.exports = router;
