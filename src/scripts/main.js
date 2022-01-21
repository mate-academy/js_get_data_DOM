'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const num = [];

for (const count of population) {
  const countText = count.innerText;

  num.push(+countText.split(',').join(''));
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPopulationNum = num.reduce((sum, count) => {
  return sum + count;
});

const averagePopulationNum = num.reduce((sum, count) => {
  return (sum + count);
}) / num.length;

totalPopulation.textContent = totalPopulationNum.toLocaleString('en-EN');
averagePopulation.textContent = averagePopulationNum.toLocaleString('en-EN');
