'use strict';

const populations = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

let calculatedTotal = 0;

for (const population of populations) {
  const number = Number(population.innerText.replaceAll(',', ''));

  calculatedTotal += number;
}

totalSpan.innerText = calculatedTotal.toLocaleString('en');

averageSpan.innerText
  = (calculatedTotal / populations.length).toLocaleString('en');
