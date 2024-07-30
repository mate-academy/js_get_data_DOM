'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const convertPopulation = (populationStr) => {
  return parseInt(populationStr.replace(/,/g, ''), 10);
};

const populations = populationElements.map((item) => {
  return convertPopulation(item.textContent);
});

const total = populations.reduce((acc, item) => acc + item, 0);
const average = total / populations.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString();

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString();
