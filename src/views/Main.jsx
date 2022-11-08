const React = require('react');

const Layout = require('./Layout');
const TodoCard = require('./Card');

function Main({ todos }) {
  return (
    <Layout>
      <form className="form" method="POST" action="/">
        <div>
          <label htmlFor="title">Название таски: </label>
          <input id="title" name="title" type="text" />
        </div>
        <div>
          <label htmlFor="text">Статус таски: </label>
          <input id="text" name="text" type="text" />
        </div>
        {/* Если не указать тип кнопки, то он по умолчанию submit */}
        <button type="submit" className="sendButton">Отправить</button>
      </form>
      <div className="todosContainer">
        {todos && todos.map(({ id, title, text }) => <TodoCard key={id} id={id} title={title} text={text} />)}
      </div>
      <script defer src="js/todos.js" />
    </Layout>
  );
}

module.exports = Main;
