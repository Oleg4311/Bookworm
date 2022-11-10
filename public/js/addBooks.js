const add = document.querySelector('.container');

add.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.innerHTML === 'LIKE') {
    console.log('====================2222222222');
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
    console.log(result);
  }
  if (e.target.tagName === 'a') {
    console.log('===================11111');
    console.log(e.target);
  }
});
