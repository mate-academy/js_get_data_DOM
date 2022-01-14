'use strict';

const population = document.querySelectorAll('.population');
const numbers = [];

for (const count of population) {
  const countText = count.innerText;

  numbers.push(+countText.split(',').join(''));
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPopulationNum = numbers.reduce((sum, count) => {
  return sum + count;
});

const averagePopulationNum = numbers.reduce((sum, count) => {
  return (sum + count);
}) / numbers.length;

totalPopulation.textContent = totalPopulationNum.toLocaleString('en-EN');
averagePopulation.textContent = averagePopulationNum.toLocaleString('en-EN');
