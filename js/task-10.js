function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestory: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let divCollection = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divCollection.push(divEl);
  }
  refs.divBoxesEl.append(...divCollection);
};

refs.btnCreate.addEventListener('click', () => {
  createBoxes(refs.inputEl.value);
});

refs.btnDestory.addEventListener('click', () => {
  refs.divBoxesEl.innerHTML = "";
});

