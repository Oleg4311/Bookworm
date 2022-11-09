const express = require('express');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const SignUp = require('../views/SignUp');

const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    renderTemplate(SignUp, {}, res);
  } catch (error) {
    console.log('Ошибка');
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      name, password, email, phone,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      const newUser = await User.create({
        name, password: hashedPassword, email, phone,
      });
      req.session.username = newUser.name;
      req.session.userEmail = newUser.email;
      req.session.userId = newUser.id;
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log('Ошибка');
  }
});

module.exports = router;
