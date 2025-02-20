'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const populations = populationElements.map((country) => {
  return +country.innerText.split(',').join('');
});

const totalPopulation = populations.reduce((acc, country) => acc + country, 0);

const totalElement = document.querySelector('.total-population');

totalElement.innerText = totalPopulation.toLocaleString('en-US');

const averageElement = document.querySelector('.average-population');

averageElement.innerText = Math.floor(
  totalPopulation / populations.length,
).toLocaleString('en-US');
