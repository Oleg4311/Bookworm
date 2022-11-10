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
              <button type="submit" className="viewBook" id={`${book.id}`}>Показать книгу</button>
            </a>

            <button type="button" className="addBtn" id={`${book.id}`}>LIKE</button>
            
            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-md-12">
                  <div className="stars">
                    <form action="" className="rating">
                      <input className="star star-5" id="star-5" type="radio" name="star" />
                      <label className="star star-5" htmlFor="star-5" />
                      <input className="star star-4" id="star-4" type="radio" name="star" />
                      <label className="star star-4" htmlFor="star-4" />
                      <input className="star star-3" id="star-3" type="radio" name="star" />
                      <label className="star star-3" htmlFor="star-3" />
                      <input className="star star-2" id="star-2" type="radio" name="star" />
                      <label className="star star-2" htmlFor="star-2" />
                      <input className="star star-1" id="star-1" type="radio" name="star" />
                      <label className="star star-1" htmlFor="star-1" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <script src="js/addBooks.js" />
      </div>
    </Layout>
  );
}

module.exports = Main;
