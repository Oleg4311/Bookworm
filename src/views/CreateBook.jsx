const React = require('react');
const Layout = require('./Layout');

module.exports = function CreateBook({ userName, books }) {
  return (
    <Layout userName={userName}>
      <link rel="stylesheet" href="/styles/createBook.css" />

      <div className="container2">

        <h2> Добавить книгу </h2>

        <form id="addUser" method="post" action="/createbook" className="mainForm">

          <div className="mb-3">
            <label className="did-floating-label">Ссылка в формате URL для загрузки обложки</label>
            <input type="url" required className="form-control" id="exampleInputUsername" name="picture" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Название книги</label>
            <input type="name" required className="form-control" id="exampleInputUsername" name="nameBook" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Автор книги</label>
            <input type="author" required className="form-control" id="exampleInputUsername" name="author" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Краткое описание книги</label>
            <textarea type="comments" required className="form-control" id="exampleInputUsername" name="comments" placeholder="" />
          </div>

          <div className="button-form" />
          <button type="submit" className="btn floating-button" id="submit">Добавить книгу</button>
        </form>
      </div>

    </Layout>
  );
};
