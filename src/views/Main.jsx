const React = require('react');

const Layout = require('./Layout');

function Main({ books, userName }) {
  return (
    <Layout userName={userName}>
      <div className="container">
        {books.map((book) => (
          <div>
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
          </div>
        ))}
      </div>
      {/* <script defer src="js/books.js" /> */}
    </Layout>
  );
}

module.exports = Main;
