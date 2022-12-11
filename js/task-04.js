const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

counterValueEl.textContent = 0;

decrementBtnEl.addEventListener("click", () => (counterValueEl.textContent -= 1));

incrementBtnEl.addEventListener("click", () => {
  let value = Number(counterValueEl.textContent);

  value += 1;

  return (counterValueEl.textContent = value);
});