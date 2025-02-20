'use strict';

const elements = [...document.querySelectorAll('span.population')];

const populationArr = elements.map((element) => {
  return Number(element.innerText.split(',').join(''));
});

const totalPopulation = populationArr.reduce((acc, oneCountryPopulation) => {
  return acc + oneCountryPopulation;
}, 0);

const averagePopulation = totalPopulation / populationArr.length;

const userLanguage = navigator.language;

document.querySelector('span.total-population').innerText =
  totalPopulation.toLocaleString(userLanguage);

document.querySelector('span.average-population').innerText =
  averagePopulation.toLocaleString(userLanguage);
