let btnOpener = document.querySelector('.button-opener');
let itemList = document.querySelector('.list-item');
let dropDownArrow = document.querySelector('.drop-down i');
btnOpener.addEventListener('click', function() {
  itemList.classList.toggle('open');
  dropDownArrow.classList.toggle('open');
})