'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalValue = 0;

for (const num of population) {
  totalValue += +num.innerText.split(',').join('');
};

const averageValue = totalValue / population.length;

totalPopulation.textContent = totalValue;
averagePopulation.textContent = averageValue;
