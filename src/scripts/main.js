'use strict';

const elements = [...document.querySelectorAll('span.population')];

const populationArr = elements.map((element) => {
  return Number(element.innerText.split(',').join(''));
});

const totalPopulation = populationArr.reduce((sum, currentCountryPop) => {
  return sum + currentCountryPop;
}, 0);

const averagePopulation = totalPopulation / populationArr.length;

const userLanguage = 'en-US';

document.querySelector('span.total-population').textContent =
  totalPopulation.toLocaleString(userLanguage);

document.querySelector('span.average-population').textContent =
  averagePopulation.toLocaleString(userLanguage);
