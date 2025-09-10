'use strict';

const countriesPopulation = [...document.getElementsByClassName('population')];
const populationArr = countriesPopulation.map((country) => {
  return Number(country.textContent.replace(/,/g, ''));
});

const totalElement = document.querySelector('.total-population');
const avgElement = document.querySelector('.average-population');

const total = populationArr.reduce((a, b) => a + b, 0);
const avg = Math.round(total / populationArr.length);

totalElement.textContent = total.toLocaleString();
avgElement.textContent = avg.toLocaleString();
