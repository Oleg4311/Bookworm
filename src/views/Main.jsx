const React = require('react');

const Layout = require('./Layout');

function Main({ books, userName, raitings }) {
  return (
    <Layout userName={userName}>
      {/* <link rel="stylesheet" href="/styles/btnLike.css" /> */}
      <link rel="stylesheet" href="/styles/main.css" />
      <div className="container1" id="firstDiv">
        <div className="container">
          {books.map((book) => {
            const raitingBook = raitings.filter((el) => el.bookId === book.id);
            const num = raitingBook.reduce((acc, curr) => acc + curr.raiting, 0);
            let numberAverage = null;
            if (num === 0) {
              numberAverage = 0;
            } else {
              numberAverage = (num / raitingBook.length).toFixed(2);
            }
            // if (numberAverage === NaN || numberAverage == undefined) {
            //   numberAverage = 0;
            // }
            const raitingValue = Math.round(num / raitingBook.length);
            return (
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

                <a type="submit" id="href" href={`/book/${book.id}`}>
                  <button type="submit" className="viewBook floating-button" id={`${book.id}`}>Показать книгу</button>
                </a>

                <button type="button" className="addBtn floating-button" id={`${book.id}`}>LIKE</button>
                <div className="container1 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="stars">
                        <form action="" className="raiting" id={`${book.id}`}>
                          <input className="star star-5" id={`star-5-${book.id}`} type="radio" checked={raitingValue === 5} name="star" />
                          <label className="star star-5" htmlFor={`star-5-${book.id}`} />
                          <input className="star star-4" id={`star-4-${book.id}`} type="radio" checked={raitingValue === 4} name="star" />
                          <label className="star star-4" htmlFor={`star-4-${book.id}`} />
                          <input className="star star-3" id={`star-3-${book.id}`} type="radio" checked={raitingValue === 3} name="star" />
                          <label className="star star-3" htmlFor={`star-3-${book.id}`} />
                          <input className="star star-2" id={`star-2-${book.id}`} type="radio" checked={raitingValue === 2} name="star" />
                          <label className="star star-2" htmlFor={`star-2-${book.id}`} />
                          <input className="star star-1" id={`star-1-${book.id}`} type="radio" checked={raitingValue === 1} name="star" />
                          <label className="star star-1" htmlFor={`star-1-${book.id}`} />
                          <p>
                            {' '}
                            Оценка пользователей:
                            {' '}
                            {numberAverage}
                            {' '}
                            / 5
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <script defer src="/js/addBooks.js" />
    </Layout>
  );
}

module.exports = Main;
