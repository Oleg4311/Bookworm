const React = require('react');

const Layout = require('./Layout');

module.exports = function Favorites({ books, userName }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/styles/main.css" />
      <link rel="stylesheet" href="/styles/btnLike.css" />
      <div className="container" id="firstDiv">
        {books.map((book) => (
          <div id="book">
            <img src={`${book.picture}`} alt="Load picture" />
            <p>
              Название книги:
              {' '}
              {book.nameBook}
            </p>
            <p>
              Автор:
              {' '}
              {book.author}
            </p>
            <p>
              Описание:
              {' '}
              {book.comments}
            </p>
            <a href={`/book/${book.id}`}>
              <button type="submit">Показать книгу</button>
            </a>
            <form action="/add" method="POST">
              <button type="button" id="btn-like">LIKE</button>
            </form>
          </div>
        ))}
      </div>
      {/* <script defer src="js/books.js" /> */}
    </Layout>
  );
};
