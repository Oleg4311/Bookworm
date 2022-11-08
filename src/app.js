require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const sessionConfig = require('../config/config');

const { PORT } = process.env;
const { sequelize } = require('../db/models');

const app = express();

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is connected!');
  } catch (error) {
    console.error('Database is not connected!', error.message);
  }
  console.log(`Server is started on ${PORT} port!`);
});
