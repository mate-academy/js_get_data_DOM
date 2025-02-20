'use strict';

// write your code here
const populationCounter = document.querySelectorAll('.population');
const populationNumbers = [...populationCounter].map((node) =>
  Number(node.textContent.replace(/,/g, '')),
);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = total / populationNumbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
