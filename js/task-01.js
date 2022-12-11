const katalogEl = document.querySelector('#categories');
console.log('Number of categories:' ,katalogEl.children.length);


const katalogItemEl = document.querySelectorAll('.item');
katalogItemEl.forEach((element) => {
  console.log('Category:' ,element.firstElementChild.textContent);
  console.log('Elements:' ,element.lastElementChild.children.length);
})



