const React = require('react');

const Layout = require('./Layout');

function Main({ books, userName }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/styles/main.css" />
      <link rel="stylesheet" href="/styles/btnLike.css" />
      <div className="container" id="firstDiv">
        {books.map((book) => (
          <div className="book" id={`${book.id}`}>
            <img src={`${book.picture}`} alt="Load picture" />
            <p>
              Название книги:
              {' '}
              <span>
                {book.nameBook}
              </span>
            </p>
            <p>
              Автор:
              {' '}
              <span>
                {book.author}
              </span>
            </p>
            <p>
              Описание:
              {' '}
              <span>
                {book.comments}
              </span>
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
      <script defer src="js/addBooks.js" />
    </Layout>
  );
}

module.exports = Main;
