require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const allBooks = require('./routers/allBooks');
const book = require('./routers/book');
const CreateBook = require('./routers/CreateBook');
const registerRouter = require('./routers/registerRouter');
const loginRouter = require('./routers/loginRouter');
const logoutRouter = require('./routers/logoutRouter');
const Favorites = require('./routers/FavoritesRouter');
const addBook = require('./routers/addBookRouter');
const deleteBookFav = require('./routers/deleteBookRouter');

const { PORT } = process.env;
const { sequelize } = require('../db/models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  name: 'Books',
  store: new FileStore(),
  secret: process.env.SECRET || 'privet bobri',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

app.use('/', allBooks);
app.use('/book', book);
app.use('/createbook', CreateBook);
app.use('/favorites', Favorites);
app.use('/add', addBook);
app.use('/delete', deleteBookFav);
app.use('/signup', registerRouter);
app.use('/signin', loginRouter);
app.use('/logout', logoutRouter);


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is connected!');
  } catch (error) {
    console.error('Database is not connected!', error.message);
  }
  console.log(`Server is started on ${PORT} port!`);
});
