'use strict';

// write your code here
const populationArr = document.querySelectorAll('.population');

const population = [...populationArr].map((p) => {
  return Number(p.innerText.replaceAll(',', ''));
});

const total = population.reduce((acc, i) => acc + i, 0);
const average = Math.ceil(total / population.length);

const totalLocaleString = total.toLocaleString('en-US');
const averageLocaleString = average.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalLocaleString;
averagePopulation.textContent = averageLocaleString;
