const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onTagretFormInput);

function onTagretFormInput(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля, будь ласка");
    return;
  }
  const userForm = { email: email.value, password: password.value };
  console.log(userForm);

  loginForm.reset();
}
