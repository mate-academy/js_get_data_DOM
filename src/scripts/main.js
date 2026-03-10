'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

let total = 0;

populationElements.forEach((el) => {
  const number = Number(el.textContent.replace(/,/g, ''));

  total += number;
});

const average = total / populationElements.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
