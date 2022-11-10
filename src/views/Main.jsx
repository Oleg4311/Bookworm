const React = require('react');

const Layout = require('./Layout');

function Main({ books, userName }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/styles/btnLike.css" />
      <link rel="stylesheet" href="/styles/main.css" />
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
            <a type="submit" href={`/book/${book.id}`}>
              <button type="submit">Показать книгу</button>
            </a>

              <button type="button" className="addBtn" id={`${book.id}`}>LIKE</button>


          </div>
        ))}
        <script src="js/addBooks.js" />
      </div>
    </Layout>
  );
}

module.exports = Main;
