'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('.population');
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector(
    '.average-population',
  );

  let totalPopulation = 0;
  let count = 0;

  populationElements.forEach((element) => {
    const population = parseInt(element.textContent.replace(/,/g, ''), 10);

    if (!isNaN(population)) {
      totalPopulation += population;
      count++;
    }
  });

  const averagePopulation = Math.floor(totalPopulation / count);

  totalPopulationElement.textContent = totalPopulation.toLocaleString();
  averagePopulationElement.textContent = averagePopulation.toLocaleString();
});
