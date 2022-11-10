const express = require('express');
const router = require('express').Router();
const { Raiting, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const currentUserId = await User.findOne({ where: { name: userName }, raw: true });
    const userId = currentUserId.id;
    const { id, star } = req.body;
    const user = await Raiting.findOne({
      where: {
        bookId: id,
        userId,
      },
    });

    // //
    // entry = await Entry.update(
    //   { title: req.body.title, body: req.body.body },
    //   { where: { id: req.params.id }, returning: true, plain: true },
    // );
    if (user) {
      await Raiting.update({ raiting: star }, { where: { id: user.id } });
    } else {
      const bookRating = await Raiting.create({ raiting: star, bookId: id, userId });
    }
  } catch (error) {
    console.log('Ошибка', error);
  }
});

module.exports = router;
