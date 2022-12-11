// const inputEl = document.querySelector('#font-size-control');
// const spanEl = document.querySelector('#text');

 const refs = {
  inputEl: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
 };

 refs.inputEl.addEventListener('input', (changeFontSize));

 function changeFontSize () {
  refs.spanEl.style.fontSize = `${refs.inputEl.value}px`
 }