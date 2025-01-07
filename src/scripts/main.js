'use strict';

// write your code here
const populations = Array.from(
  document.querySelectorAll('span.population'),
).map((el) => parseInt(el.textContent.replace(/,/g, ''), 10));
const totalPopulation = populations.reduce(
  (total, current) => total + current,
  0,
);
const avgPopulation = totalPopulation / populations.length;

const formatWithCommas = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('span.total-population').textContent =
  formatWithCommas(totalPopulation);

document.querySelector('span.average-population').textContent =
  formatWithCommas(Math.round(avgPopulation));
// # sourceMappingURL=main.js.map
