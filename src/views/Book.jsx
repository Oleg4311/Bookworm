const React = require('react');

const Layout = require('./Layout');

function Book({ book }) {
  return (
    <Layout>
      <div className="container">
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
        </div>
      </div>
      <script defer src="js/books.js" />
    </Layout>
  );
}

module.exports = Book;
