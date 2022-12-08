const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listGoods = document.querySelector('#ingredients');

const elem = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = option;
  return liEl;
});
console.log(elem);
listGoods.append(...elem);