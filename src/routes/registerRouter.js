const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const SignUp = require('../views/SignUp');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    renderTemplate(Layout, {}, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
