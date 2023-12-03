'use strict';

// write your code here
const populationSpans = document.getElementsByClassName('population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');
const populationArray = [];

for (let i = 0; i < populationSpans.length; i++) {
  populationArray.push(populationSpans[i].textContent);
}

const totalSum = populationArray.reduce((accumulator, currentValue) => {
  const number = parseInt(currentValue.replace(/,/g, ''));

  return accumulator + number;
}, 0);

totalPopulationSpan.textContent = totalSum.toLocaleString('en-US');

averagePopulationSpan.textContent = (
  totalSum / populationArray.length
).toLocaleString('en-US');
