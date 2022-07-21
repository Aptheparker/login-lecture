'use strict';

const id = document.querySelector('#id'),
  password = document.querySelector('#password'),
  loginButton = document.querySelector('button');

loginButton.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  console.log(req);

  // fetch('/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(req),
  // });
}
