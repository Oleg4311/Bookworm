const React = require('react');

const Layout = require('./Layout');

function SignIn() {
  return (
    <Layout>
      <form name="signInForm" className="signInForm">
        <div className="container">
          <div className="d-flex justify-content-end ">
            <button type="submit" className="btn btn-secondary mail m-3">по почте</button>
            <button type="submit" className="btn btn-secondary phone m-3">по телефону</button>
          </div>
          <div className="phone-email">
            <div className="mb-3 form-outline divMail">
              <label htmlFor="form12" className="form-label">Email адрес:</label>
              <input type="email" name="email" id="form12" className="form-control" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="form12" className="form-label">Пароль:</label>
            <input type="password" id="form12" name="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = SignIn;
