const React = require('react');
const Layout = require('./Layout');

module.exports = function CreateBook({ userName, books, wrong }) {
  return (
    <Layout userName={userName}>

      <div className="container2">

        <h2> Добавить книгу </h2>

        <form id="addUser" method="post" action="/createbook" className="mainForm">
          <p className="errorMesseg">{`${wrong}`}</p>

          <div className="mb-3">
            <label className="did-floating-label">Ссылка в формате URL для загрузки обложки</label>
            <input type="url" className="form-control" id="exampleInputUsername" name="picture" placeholder="" required />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Название книги</label>
            <input type="name" className="form-control" id="exampleInputUsername" name="nameBook" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Автор книги</label>
            <input type="author" className="form-control" id="exampleInputUsername" name="author" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Краткое описание книги</label>
            <textarea type="comments" className="form-control" id="exampleInputUsername" name="comments" placeholder="" />
          </div>

          <div className="button-form" />
          <button type="submit" className="btn btn-primary" id="submit">Добавить книгу.</button>
        </form>
      </div>

    </Layout>
  );
};
