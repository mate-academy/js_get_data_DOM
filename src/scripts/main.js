'use strict';

const list = document.querySelectorAll('.population');
const listArray = [...list];

const total = listArray.reduce((sum, e) =>
  Number(e.innerText.replaceAll(',', '')) + sum, 0);

const totalElement = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

totalElement.innerText = total.toLocaleString();
average.innerText = (total / list.length).toLocaleString();
