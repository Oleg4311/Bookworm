const React = require('react');

module.exports = function Layout({ children, userName }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        <link rel="stylesheet" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/styles/Layout.css" />
        <link rel="stylesheet" href="/styles/book.css" />
        <link rel="stylesheet" href="/styles/raiting.css" />
        <link rel="stylesheet" href="/styles/createBook.css" />

        <title>Books</title>
      </head>
      <body id="body">
        <header id="header">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand">Books</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              { userName ? (
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">Главная</a>
                    </li>

                    <li className="nav-item" id="add">
                      <a className="nav-link" href="/createbook">Добавить книгу</a>
                    </li>
                    <li className="nav-item">

                      <a className="nav-link" href="/favorites">Избранное</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">Выйти</a>
                    </li>
                  </ul>
                  <div id="Greetings" className="nav-link" href="/profile">
                    Привет,
                    {' '}
                    { userName }
                    {' '}
                    !
                  </div>
                </div>
              ) : (
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Главная</a>
                    </li>
                    <li className="nav-item">

                      <a className="nav-link" href="/signup">Регистрация </a>

                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signin">Авторизация</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </header>
        { children }
      </body>
    </html>
  );
};
