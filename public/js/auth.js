const { signUpForm } = document.forms;
signUpForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const allFormsData = Object.fromEntries(new FormData(signUpForm));
  console.log(allFormsData);
  const {
    name, email, password, phone,
  } = allFormsData;
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

const buttonMail = document.querySelector('.mail');
buttonMail?.addEventListener('click', (event) => {
  try {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
      const divMail = document.querySelector('.divMail');
      if (divMail) {
        console.log(1111);
      } else {
        const newInput = document.createElement('div');
        newInput.classList.add('divMail');
        newInput.classList.add('mb-3');
        newInput.innerHTML = `<label htmlFor="exampleInputEmail1" class="form-label">Email адрес:</label>
        <input type="phone" name="email" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" />
      </div>`;
        const divPhoneMail = document.querySelector('.phone-email');
        const divPhone = document.querySelector('.divPhone');
        divPhoneMail.appendChild(newInput);
        divPhoneMail.removeChild(divPhone);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const buttonPhone = document.querySelector('.phone');
buttonPhone?.addEventListener('click', (event) => {
  try {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
      const divPhone = document.querySelector('.divPhone');
      if (!divPhone) {
        const newInput = document.createElement('div');
        newInput.classList.add('divPhone');
        newInput.classList.add('mb-3');
        newInput.innerHTML = `<label htmlFor="exampleInputEmail1" class="form-label">Телефон:</label>
        <input type="phone" name="phone" placeholder="Введите номер с 8" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" />
      </div>`;
        const divPhoneMail = document.querySelector('.phone-email');
        const divMail = document.querySelector('.divMail');
        divPhoneMail.appendChild(newInput);
        divPhoneMail.removeChild(divMail);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
