'use strict';

let spanEl = Array.from(document.getElementsByClassName('population'))

spanEl = spanEl.map((el) => {
  const element = el.textContent.split(',').join('');

  return Number(element);
});

let totalValue = 0;
let count = 0;

spanEl.forEach((elem) => {
  totalValue += elem;
  count++;
});

const averageValue = totalValue / count;

const calculateTV = document.querySelector('.total-population');
const calculateAV = document.querySelector('.average-population');

calculateTV.textContent = totalValue.toLocaleString();
calculateAV.textContent = averageValue.toLocaleString();
