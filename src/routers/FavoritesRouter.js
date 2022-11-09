const express = require('express');

const router = express.Router();
const { User, Book, Connect } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const Favorites = require('../views/Favorites');

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const currentUserId = await User.findOne({ where: { name: userName }, raw: true });
    const userId = currentUserId.id;
    const userBooksConnect = await Connect.findAll({ where: { userId } });
    console.log(userBooksConnect);
    const books = [];
    for (let i = 0; i < userBooksConnect.length; i++) {
      const a = await Book.findOne({ raw: true, where: { id: userBooksConnect[i].bookId } });
      books.push(a);
    }
    console.log(books);
    renderTemplate(Favorites, { userName, books }, res);
  } catch (error) {
    console.log('Ошибка', error);
  }
});

module.exports = router;
