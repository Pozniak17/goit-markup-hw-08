const filtersEl = document.querySelector('.filters');

console.log(filtersEl);

filtersEl.addEventListener('click', onFiltersBtnClick);

function onFiltersBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target.textContent);
}
