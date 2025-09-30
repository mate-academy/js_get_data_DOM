'use strict';

const allPopulation = [...document.querySelectorAll('.population')];
const allPopulationValues = allPopulation.map((el) => {
  return el.textContent.trim();
});

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const sumPopulation = allPopulationValues.reduce((acc, curr) => {
  return acc + Number(curr.split(',').join(''));
}, 0);

const averagePopulationValue = Math.round(
  sumPopulation / allPopulationValues.length,
);

totalPopulation.textContent = sumPopulation.toLocaleString('en-US');
averagePopulation.textContent = averagePopulationValue.toLocaleString('en-US');
