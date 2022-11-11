const add = document.querySelector('.container1');

add.addEventListener('click', async (e) => {
  if (e.target.innerHTML === 'В избранное') {
    const closestParent = e.target.closest('.addBtn');
    const { id } = closestParent;

    const response = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    const result = await response.json();
    // console.log(result);
  }

  if (e.target.innerHTML === 'Показать книгу') {
    const closestParent = e.target.closest('.viewBook');
    const { id } = closestParent;
    window.location = `/book/${id}`;
  }

  const raiting = document.querySelector('.raiting');
  if (e.target.tagName === 'INPUT') {
    const closestParent = e.target.closest('.raiting');
    const { id } = closestParent;
    const star = e.target.className.slice(-1);
    console.log(id);
    console.log(star);

    const response = await fetch('/raiting', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id, star,
      }),
    });

    const result = response.json();
  }
});
