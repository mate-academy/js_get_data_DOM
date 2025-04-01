'use strict';

'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});

const totalPopulation = populations.reduce((sum, number) => sum + number, 0);

const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString();
