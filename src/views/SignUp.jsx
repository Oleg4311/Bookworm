const React = require('react');

const Layout = require('./Layout');

function SignUp() {
  return (
    <Layout>
      <form name="signUpForm">
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputText" className="form-label">Введите ваше имя:</label>
            <input type="text" name="name" className="form-control" id="exampleInputText" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email адрес:</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Телефон:</label>
            <input type="phone" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль:</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = SignUp;
