const express = require('express');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const SignIn = require('../views/SignIn');

const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    renderTemplate(SignIn, {}, res);
  } catch (error) {
    console.log('Ошибка');
  }
});

router.post('/', async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ where: { email } });
    const isUserAuth = await bcrypt.compare(password, user.password);
    req.session.username = user.name;
    if (user) {
      if (isUserAuth) {
        res.sendStatus(200);
      } else {
        res.json({ error: 'Неправильный пароль' });
      }
    } else {
      res.json({ error: 'Нет такого email' });
    }
  } catch (error) {
    console.log('Ошибка');
  }
});

module.exports = router;
