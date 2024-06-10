'use strict';

const populationElements = [...document.querySelectorAll('.population')];

function calculateAverage(elements) {
  let totalPopulation = 0;
  const count = elements.length;

  elements.forEach((element) => {
    const population = parseInt(element.textContent.replace(/,/g, ''), 10);

    totalPopulation += population;
  });

  const averagePopulation = totalPopulation / count;

  return { totalPopulation, averagePopulation };
}

const { sum, average } = calculateAverage(populationElements);

document.querySelector('.total-population').textContent = sum.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();

// write your code here
