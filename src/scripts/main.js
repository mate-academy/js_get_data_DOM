'use strict';

const populationElements = document.querySelectorAll('.population');
let total = 0;

populationElements.forEach((element) => {
  const value = element.textContent.replace(/,/g, '');

  total += Number(value);
});

const average = total / populationElements.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.floor(average).toLocaleString();
