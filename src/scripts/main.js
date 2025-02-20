'use strict';

const population = document.querySelectorAll('span.population');

let total = 0;

population.forEach((item) => {
  total += Number(item.textContent.replace(/\D/g, ''));
});

const average = total / population.length;

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  average.toLocaleString('en-US');
