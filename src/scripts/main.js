'use strict';

const list = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationList = [...list].map(
  item => +item.innerText.replaceAll(',', ''),
);

const totalPopulation = populationList.reduce(
  (sum, population) => sum + population, 0
);
const averagePopulation = totalPopulation / populationList.length;

total.innerText = totalPopulation.toLocaleString('en-US');
average.innerText = averagePopulation.toLocaleString('en-US');
