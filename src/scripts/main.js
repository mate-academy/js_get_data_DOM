'use strict';

const populations = document.querySelectorAll('span.population');

const total = Array.from(populations).reduce(
  (acc, x) => acc + parseFloat(x.textContent.replace(/,/g, '').trim()),
  0,
);

const average = total / populations.length;

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
