'use strict';

const populationElements = document.querySelectorAll('.population');
let totalPopulation = 0;

for (const element of populationElements) {
  const populationStr = element.textContent.replace(/,/g, '');
  const populationNum = Number(populationStr);

  if (!Number.isNaN(populationNum)) {
    totalPopulation += populationNum;
  }
}

const averagePopulation = totalPopulation / populationElements.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

if (totalElement) {
  totalElement.textContent = totalPopulation.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.textContent =
    Math.round(averagePopulation).toLocaleString('en-US');
}
