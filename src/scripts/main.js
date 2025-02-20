'use strict';

const populationSpans = document.getElementsByClassName('population');
const populations = [];
let totalPopulation = 0;

for (let i = 0; i < populationSpans.length; i++) {
  const populationText = populationSpans[i].textContent.replace(/,/g, '');
  const populationNumber = Number(populationText);

  if (!isNaN(populationNumber)) {
    populations.push(populationNumber);
    totalPopulation += populationNumber;
  }
}

const averagePopulation = totalPopulation / populations.length;

const total = document.querySelector('.total-population');

total.textContent = totalPopulation.toLocaleString();

const average = document.querySelector('.average-population');

average.textContent = averagePopulation.toLocaleString();
