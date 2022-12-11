const textInputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

textInputEl.addEventListener('input' ,() => textInputEl.value ? (spanEl.textContent = textInputEl.value)
: (spanEl.textContent = "Anonymous"));