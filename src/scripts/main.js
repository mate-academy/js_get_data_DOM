'use strict';

const populationElements = document.querySelectorAll('.population');
let total = 0;

populationElements.forEach((el) => {
  const num = Number(el.innerText.replace(/,/g, ''));

  if (!isNaN(num)) {
    total += num;
  }
});

const average = Math.round(total / populationElements.length);

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');
