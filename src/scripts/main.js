'use strict';

const spanList = document.querySelectorAll('.population');
const populationList = [...spanList].map((span) =>
  Number(span.textContent.replace(/,/g, '')),
);

const sumPopulation = populationList.reduce((total, value) => total + value, 0);

const averagePopulation = Math.floor(sumPopulation / populationList.length);

document.querySelector('.total-population').textContent =
  sumPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
