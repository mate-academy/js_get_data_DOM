'use strict';

const dataPopulation = document.querySelectorAll('span.population');
const metamorfoz = Array.from(dataPopulation, (person) =>
  Number(person.textContent.replace(/(,\s*)+/g, '').trim()),
);

const total = metamorfoz.reduce((acc, num) => acc + num, 0);
const average = (total / metamorfoz.length).toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent = average;
