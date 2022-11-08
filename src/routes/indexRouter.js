const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Layout = require('../views/Layout');

router.get('/', async (req, res) => {
  try {
    renderTemplate(Layout, {}, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
