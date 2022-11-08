const React = require('react');

const Layout = require('./Layout');

function SignIn() {
  return (
    <Layout>
      <form name="signInForm">
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email адрес:</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль:</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Войти</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = SignIn;
