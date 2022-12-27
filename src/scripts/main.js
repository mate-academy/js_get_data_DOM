'use strict';

function calculatePopulation() {
  const items = document.querySelectorAll('.population');

  const populations = [...items].map(item => item.textContent);

  const totalPopulation
  = populations
    .map(population => +population.split(',').join(''))
    .reduce((a, b) => a + b, 0);

  const averagePopulation = totalPopulation / populations.length;

  document.querySelector('.total-population').textContent
    = totalPopulation.toLocaleString('en-US');

  document.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString('en-US');
};

calculatePopulation();
