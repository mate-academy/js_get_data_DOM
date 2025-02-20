'use strict';

'use strict';

const populationElements = [...document.querySelectorAll('.population')];

function calculateTotals(elements) {
  let sum = 0;
  const count = elements.length;

  elements.forEach((element) => {
    const population = parseInt(element.textContent.replace(/,/g, ''), 10);

    sum += population;
  });

  const average = sum / count;

  return { sum, average };
}

const totals = calculateTotals(populationElements);
const totalPopulation = totals.sum;
const averagePopulation = totals.average;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
