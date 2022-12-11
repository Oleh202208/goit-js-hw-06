function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  spanColorEl: document.querySelector('.color'),
  btnChangeColorEl: document.querySelector('.change-color'),
};

refs.btnChangeColorEl.addEventListener('click', () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
refs.spanColorEl.textContent = `${refs.bodyEl.style.backgroundColor}`;
});
