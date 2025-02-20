'use strict';

const population = [...document.querySelectorAll('span.population')].map(
  (el) => +el.textContent.replace(/,/g, ''),
);

const total = population.reduce((a, b) => a + b, 0);
const average =
  population.length > 0 ? Math.floor(total / population.length) : 0;

const replaceCalculateIt = (classSelector, value) => {
  document.querySelector(classSelector).textContent =
    value.toLocaleString('en-US');
};

replaceCalculateIt('.average-population', average);
replaceCalculateIt('.total-population', total);
