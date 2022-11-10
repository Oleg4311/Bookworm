const React = require('react');

const Layout = require('./Layout');

function Book({ book, userName, comments }) {
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

          <form action={`/book/${book.id}`} method="POST">
            <div className="mb-3">
              <label className="did-floating-label"> Текст комментария </label>
              <textarea type="comments" className="form-control" id="exampleInputUsername" name="comments" placeholder="" />
            </div>
            <button type="submit" className="btn btn-primary" id={`${book.id}`}>Добавить комментарий</button>
          </form>
          <div>
            {comments.map((comment) => (
              <p>{`${comment}`}</p>
            ))}
          </div>

        </div>
      </div>
      {/* <script defer src="js/books.js" /> */}
    </Layout>
  );
}

module.exports = Book;
