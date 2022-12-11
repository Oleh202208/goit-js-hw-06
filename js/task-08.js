const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit',onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();
if (
  !event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value)
   {
  return alert("All fields must be filled!");
}

const fofmElements = event.currentTarget.elements;

const email = fofmElements.email.value;
const password = fofmElements.password.value;

const formData = {
  email,
  password,
};

// const formData = new FormData(event.currentTarget);

console.log(formData);
event.currentTarget.reset();
}