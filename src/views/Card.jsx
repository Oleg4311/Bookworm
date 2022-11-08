const React = require('react');

function Card({ id, title, text }) {
  return (
    <div className="todoCard">
      <a href={`/todo/${id}`}>
        <h2 className="todoTitle">{title}</h2>
      </a>
      <p>{text}</p>
      <p>{id}</p>
      <div className="form-check form-check-reverse">
        <input className="form-check-input" type="checkbox" value="" id="reverseCheck1" />
      </div>
      <button id={id} type="button" className="redactButton">Редактировать</button>
      <button id={id} type="button" className="deleteButton">Удалить</button>
    </div>
  );
}

module.exports = Card;
