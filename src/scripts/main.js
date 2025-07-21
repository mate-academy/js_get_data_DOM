'use strict';

// write your code here
const el = [...document.querySelectorAll('span.population')];
const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');

const sum = el.reduce(
  (acc, population) => acc + parseInt(population.textContent.replace(/,/g, '')),
  0,
);

average.textContent = (sum / el.length).toLocaleString();

total.textContent = sum.toLocaleString();
