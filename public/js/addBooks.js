const add = document.querySelector('.add');

add.addEventListener('click', async (e) => {
  e.preventDefault();

  if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'LIKE') {
    const closestParent = e.target.closest('.book');
    const picture = closestParent.children[0].src;
    const nameBook = closestParent.children[1].children[0].innerText;
    const author = closestParent.children[2].children[0].innerText;
    const comments = closestParent.children[3].children[0].innerText;
    const { id } = closestParent;

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
    console.log(result);
  }
});
