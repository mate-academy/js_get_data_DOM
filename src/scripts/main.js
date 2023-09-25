'use strict';

const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');

let calc = 0;

for (const countPopulation of population) {
  calc += parseInt(countPopulation.textContent.trim().replace(/,/g, ''));
};

const format = (num) => num.toLocaleString('en-US');

totalPopulation.textContent = format(calc);
avaragePopulation.textContent = format(calc / population.length);
