'use strict';

const populations = [...document.querySelectorAll('.population')].map((el) => {
  return +el.innerText.replace(/,/g, '');
});
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');
const totalPopulation = populations.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / 10;
const toFormated = (number) => {
  return number.toLocaleString('en-US');
};

totalPopulationElement.innerText = toFormated(totalPopulation);

averagePopulationElement.innerText = toFormated(averagePopulation);
