'use strict';

const list = document.querySelector('.list');

const populationList = [...list.querySelectorAll('span.population')];

const countriesAmount = populationList.length;

const totalPopulation = populationList.reduce((sum, current) => (
  sum + +current.innerText.split(',').join('')
), 0);

const averagePopulation = totalPopulation / countriesAmount;

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.innerText = totalPopulation.toLocaleString();

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.innerText = averagePopulation.toLocaleString();
