const React = require('react');

const Layout = require('./Layout');

function Page({ Data }) {
  const {
    id, title, text, createdAt,
  } = Data;
  const time = JSON.stringify(createdAt);
  console.log('Data ', Data);
  return (
    <Layout>
      <h1>{title}</h1>
      <h2>{text}</h2>
      <h3>{id}</h3>
      <h4>{time}</h4>
    </Layout>
  );
}

module.exports = TodoPage;
