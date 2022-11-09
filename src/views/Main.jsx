const React = require('react');

const Layout = require('./Layout');

function Main({ books, userName }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/styles/main.css" />
      <link rel="stylesheet" href="/styles/raiting.css" />
      <div className="container " id="firstDiv">
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
            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-md-12">
                  <div className="stars">
                    <form action="">
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
      </div>
      {/* <script defer src="js/books.js" /> */}
    </Layout>
  );
}

module.exports = Main;
