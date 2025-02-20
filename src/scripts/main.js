'use strict';

const populations = Array.from(
  document.querySelectorAll('span.population'),
).map((span) => {
  const number = Number(span.textContent.replace(/,/g, ''));

  return isNaN(number) ? 0 : number;
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

const averagePopulation = Math.round(totalPopulation / populations.length);

const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
