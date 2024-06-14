'use strict';

const populations = [...document.querySelectorAll('.population')].map((el) => {
  return +el.innerText.replace(/,/g, '');
});
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');
const totalPopulation = populations.reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / populations.length;
const toFormatted = (number) => {
  return number.toLocaleString('en-US');
};

totalPopulationElement.innerText = toFormatted(totalPopulation);

averagePopulationElement.innerText = toFormatted(averagePopulation);
