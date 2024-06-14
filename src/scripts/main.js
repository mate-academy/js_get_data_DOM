'use strict';

const populations = [...document.querySelectorAll('.population')].map((el) => {
  return +el.innerText.replace(/,/g, '');
});
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const toFormated = (number) => {
  return number.toLocaleString('en-US');
};

totalPopulation.innerText = toFormated(populations.reduce((a, b) => a + b));

averagePopulation.innerText = toFormated(
  populations.reduce((a, b) => a + b) / 10,
);
