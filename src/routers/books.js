const express = require('express');

const router = express.Router();

const { Todo } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const { Main } = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({ raw: true });
    renderTemplate(Main, { todos }, res);
  } catch (error) {
    console.log('Шото поломалось :( ', error);
  }
});

router.post('/', async (req, res) => {
  const { title, text } = req.body;
  try {
    const response = await Todo.create({ title, text });
    res.json(response);
  } catch (error) {
    console.log('Шото поломалось :( ', error);
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  try {
    await Todo.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log('Шото поломалось :( ', error);
  }
});

module.exports = router;
