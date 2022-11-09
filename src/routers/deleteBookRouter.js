const router = require('express').Router();
const { Connect, User } = require('../../db/models');

router.delete('/', async (req, res) => {
  const userName = req.session.username;
  const currentUserId = await User.findOne({ where: { name: userName }, raw: true });
  const userId = currentUserId.id;
  const { id } = req.body;
  try {
    await Connect.destroy({ where: { userId, bookId: id } });
    res.json({ destroy: 'OK' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
