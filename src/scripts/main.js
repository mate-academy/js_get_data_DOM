'use strict';

const populationElements = document.getElementsByClassName('population');

let totalPopulation = 0;

for (let i = 0; i < populationElements.length; i++) {
  const population = parseInt(
    populationElements[i].textContent.replace(/,/g, ''),
    10,
  );

  totalPopulation += population;
}

const formattedTotal = totalPopulation.toLocaleString('en-US');

const avgPopulation = totalPopulation / populationElements.length;

const formattedAvg = avgPopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAvg;
