const React = require('react');

const Layout = require('./Layout');

function Book({ book, userName }) {
  return (
    <Layout userName={userName}>
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

          <div className="mb-3">
            <label className="did-floating-label">Краткое описание книги</label>
            <textarea type="comments" className="form-control" id="exampleInputUsername" name="comments" placeholder="" />
          </div>

        </div>
      </div>
      <script defer src="js/books.js" />
    </Layout>
  );
}

module.exports = Book;
