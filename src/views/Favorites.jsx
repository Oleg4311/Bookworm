const React = require('react');

const Layout = require('./Layout');

module.exports = function Favorites({ books, userName }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/styles/Favorites.css" />
      {/* <link rel="stylesheet" href="/styles/btnLike.css" /> */}
      <div className="container" id="firstDiv">
        {books.map((book) => (
          <div id={`${book.id}`} className="book">
            <img src={`${book.picture}`} alt="Load picture" />
            <p id="nameBook">
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
            <a id="href" href={`/book/${book.id}`}>
              <button className="floating-button" id="href" type="submit">Показать книгу</button>
            </a>
            <form action="/delete" method="DELETE">
              <button className="floating-button" type="button" id="btn-like">Удалить</button>
            </form>
          </div>
        ))}
      </div>
      <script defer src="js/deleteFavBook.js" />
    </Layout>
  );
};
