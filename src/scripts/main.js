'use strict';

const populationData = document.querySelectorAll('span.population');

let total = 0;

populationData.forEach((span) => {
  const spanNum = Number(span.innerText.split(',').join(''));

  total += spanNum;
});

const average = total / populationData.length;

const averagePopulation = document.querySelector('span.average-population');
const totalPopulation = document.querySelector('span.total-population');

averagePopulation.textContent = average.toLocaleString('en-US');
totalPopulation.textContent = total.toLocaleString('en-US');
