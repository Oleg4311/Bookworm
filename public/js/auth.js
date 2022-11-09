const { signUpForm } = document.forms;
signUpForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const allFormsData = Object.fromEntries(new FormData(signUpForm));
  console.log(allFormsData);
  const { name, email, password } = allFormsData;
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(allFormsData),
  });

  if (response.status === 200) {
    window.location.href = '/';
  } else {
    alert('Указанный email уже используется');
  }
});

const { signInForm } = document.forms;
signInForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const allFormsData = Object.fromEntries(new FormData(signInForm));
  console.log(allFormsData);
  const { name, password } = allFormsData;
  const response = await fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(allFormsData),
  });
  const result = await response.json();
  console.log('result', result);
  if (result.message === 'Успешный вход') {
    window.location.href = '/';
  } else if (result.error === 'Неправильный пароль') {
    alert('Неправильный пароль');
  } else if (result.error === 'Нет такого email') {
    console.log('first');
    alert('Нет такого email');
  }
});
