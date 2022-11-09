const express = require('express');

const router = express.Router();
const { Connect, User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');

router.post('/', async (req, res) => {
  // const { picture, nameBook, author, comments} = req.body;
  const bookId = req.body.id;
  try {
    const userName = req.session.username;
    const currentUserId = await User.findOne({ where: { name: userName } });
    const userId = currentUserId.id;
    await Connect.findOrCreate({ where: { userId, bookId }, defaults: { userId, bookId } });
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
