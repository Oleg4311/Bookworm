const add = document.querySelector('.add');

add.addEventListener('click', async (e) => {
  e.preventDefault();

  if (e.target.innerHTML === 'LIKE') {
    const { id } = e.target;

    const response = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        picture, nameBook, author, comments, id,
      }),
    });

    const result = await response.json();
    // console.log(result);
  }
});