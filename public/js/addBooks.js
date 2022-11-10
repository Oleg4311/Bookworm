const add = document.querySelector('.container');

add.addEventListener('click', async (e) => {
  e.preventDefault();

  if (e.target.innerHTML === 'LIKE') {
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
});

