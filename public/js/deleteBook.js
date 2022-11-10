const mainDiv = document.querySelector('.container');
console.log('-------------', mainDiv);
mainDiv.addEventListener('click', async (e) => {
  if (e.target.id === 'btn-like') {
    const { id } = e.target.parentNode.parentNode;
    const response = await fetch('/delete', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();

    if (result.destroy === 'OK') {
      mainDiv.removeChild(e.target.parentNode.parentNode);
    }
  }
});

// mainDiv.addEventListener('click', async (event) => {
//     try {
//       if (event.target.tagName === 'BUTTON') {
//         const { id } = event.target;
//         const response = await fetch('/', {
//           method: 'DELETE',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ id }),
//         });
//         if (response.status === 200) {
//           todosContainer.removeChild(event.target.parentNode);
//         }
//       }
//     } catch (error) {
//       console.log('error ', error);
//     }
//   });
