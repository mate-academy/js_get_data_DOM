'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')].map(
  (element) => Number(element.textContent.replace(/[^0-9.-]+/g, '').trim()),
);

const average =
  population.reduce((acc, item) => acc + item, 0) / population.length;

const total = population.reduce((acc, item) => acc + item, 0);

document.querySelector('.total').textContent =
  `Total: ${total.toLocaleString('en-US')}`;

document.querySelector('.average').textContent =
  `Average: ${average.toLocaleString('en-US')}`;
