'use strict';

const population = [...document.querySelectorAll('.population')];

const numberOfPopulation = population.map((country) => {
  return +country.innerText.replace(/,/g, '');
});

const totalPopulation = numberOfPopulation.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / numberOfPopulation.length;

const formatNumber = (number) => Intl.NumberFormat().format(number);

document.querySelector('.total-population').innerText = formatNumber(
  totalPopulation
);

document.querySelector('.average-population').innerText = formatNumber(
  averagePopulation
);
