'use strict';

const populationElements = document.querySelectorAll('span.population');

let total = 0;
let count = 0;

for (const element of populationElements) {
  const textContent = element.textContent.split(',').join('');

  if (!isNaN(textContent)) {
    total += +textContent;
    count++;
  }
}

const average = total / count;

const totalPopulationSpan = document.querySelector('span.total-population');
const averagePopulationSpan = document.querySelector('span.average-population');

totalPopulationSpan.innerHTML = total.toLocaleString('en-US');
averagePopulationSpan.innerHTML = average.toLocaleString('en-US');
