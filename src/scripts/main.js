'use strict';

const spans = {
  population: document.querySelectorAll('span.population'),
  averagePopulation: document.querySelector('span.average-population'),
  totalPopulation: document.querySelector('span.total-population'),
};

const total = [...spans.population].reduce(
  (initialTotal, span) => +span.innerText.replaceAll(',', '') + initialTotal,
  0,
);

const averageFormatted = (total / spans.population.length).toLocaleString(
  'en-US',
);
const totalFormatted = total.toLocaleString('en-US');

spans.averagePopulation.innerText = averageFormatted;
spans.totalPopulation.innerText = totalFormatted;
