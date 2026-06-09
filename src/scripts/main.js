'use strict';

const populationElements = document.querySelectorAll('.population');
const totalContainer = document.querySelector('.total-population');
const averageContainer = document.querySelector('.average-population');

if (populationElements.length > 0 && totalContainer && averageContainer) {
  let totalPopulation = 0;

  populationElements.forEach((element) => {
    const cleanString = element.textContent.replace(/,/g, '');
    const populationNumber = Number(cleanString);

    if (!Number.isNaN(populationNumber)) {
      totalPopulation += populationNumber;
    }
  });

  const count = populationElements.length;
  const averagePopulation = Math.round(totalPopulation / count);

  totalContainer.textContent = totalPopulation.toLocaleString('en-US');
  averageContainer.textContent = averagePopulation.toLocaleString('en-US');
}
