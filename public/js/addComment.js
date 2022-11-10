const add = document.querySelector('.container');

add.addEventListener('click', async (e) => {
  console.log('====================2222222222');
  e.preventDefault();
  if (e.target.innerHTML === 'Добавить комментарий') {
    const closestParent = e.target.closest('.btn btn-primary');
    const { id } = closestParent;
    console.log('====================2222222222', id);

    const response = await fetch(`/book/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    e.preventDefault();
    const result = await response.json();
    console.log('=====>>>', result);
  }
});
