'use strict';

const list = document.querySelectorAll('.population');

let sum = 0;
let count = 0;

for (const item of list) {
  sum += Number(item.innerText.replaceAll(',', ''));
  count++;
}

const totalElement = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

totalElement.innerText = sum.toLocaleString();
average.innerText = (sum / count).toLocaleString();
