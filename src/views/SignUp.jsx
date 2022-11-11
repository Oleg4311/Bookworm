const React = require('react');

const Layout = require('./Layout');

function SignUp() {
  return (
    <Layout>
      {/* <form name="signUpForm">
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
      </form> */}
      <script defer src="/js/auth.js" />
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Создайте аккаунт</h2>
                    <form name="signUpForm">

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">Введите ваше имя:</label>
                        <input type="text" required name="name" id="form3Example1cg" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Email адрес:</label>
                        <input type="email" required name="email" id="form3Example3cg" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Телефон:</label>
                        <input type="text" required name="phone" id="form3Example3cg" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Пароль:</label>
                        <input type="password" required name="password" id="form3Example4cdg" className="form-control form-control-lg" />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Зарегистрироваться

                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        У вас уже есть аккаунт?
                        {' '}
                        <a
                          href="/signin"
                          className="fw-bold text-body"
                        >
                          <u>Авторизоваться здесь</u>
                        </a>

                      </p>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

module.exports = SignUp;
