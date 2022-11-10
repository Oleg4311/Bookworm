const React = require('react');

function Wrong(props) {
  return (

    <div className="container px-4 text-center">
      <div className="row">
        <div className="col-6">
          <div className="p-3 border bg-light">{props.title}</div>
        </div>
      </div>
    </div>

  );
}

module.exports = Wrong;