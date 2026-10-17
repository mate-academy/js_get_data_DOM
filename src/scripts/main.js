'use strict';

const data = document.querySelectorAll('span.population');

const populations = Array.from(data, (node) => {
  const valueOfNode = node.textContent.trim().replaceAll(',', '');

  return Number(valueOfNode);
});

const sum = populations.reduce(
  (accum, currentValue) => accum + currentValue,
  0,
);

const average = sum / populations.length;

document.querySelector('span.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  average.toLocaleString('en-US');
