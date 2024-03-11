'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sum = 0;
let count = 0;

population.forEach((element) => {
  const populationText = element.textContent.replace(/,/g, '');

  sum += parseInt(populationText, 10) || 0;
  count++;
});

total.textContent = sum.toLocaleString('en-US');
average.textContent = (sum / count).toLocaleString('en-US');
