'use strict';

const listPopulation = document.querySelectorAll('.population');
const population = [...listPopulation];

let total = 0;

for (const item of population) {
  const number = parseInt(item.textContent.split(',').join(''), 10);

  total += number;
}

const average = total / population.length;

const totalCalculate = document.querySelector('.total-population');
const averageCalculate = document.querySelector('.average-population');

totalCalculate.textContent = total.toLocaleString('en-US');
averageCalculate.textContent = average.toLocaleString('en-US');
