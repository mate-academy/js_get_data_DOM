'use strict';

const population = document.querySelectorAll('.population');
const numbers = [];

for (const count of population) {
  const countText = count.innerText;

  numbers.push(+countText.split(',').join(''));
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPopulationNumber = numbers.reduce((sum, next) => {
  return sum + next;
});

const averagePopulationNumber = totalPopulationNumber / numbers.length;

totalPopulation.textContent = totalPopulationNumber.toLocaleString('en-EN');
averagePopulation.textContent = averagePopulationNumber.toLocaleString('en-EN');
