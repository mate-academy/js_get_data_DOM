'use strict';

const allPopulations = [...document.querySelectorAll('span.population')];

const total = allPopulations
  .map((item) => item.textContent)
  .reduce((acc, val) => acc + Number(val.replace(/,/g, '')), 0);

const average = total / allPopulations.length;

document.querySelector('span.total-population').textContent = String(
  total.toLocaleString(),
);

document.querySelector('span.average-population').textContent = String(
  average.toLocaleString(),
);
