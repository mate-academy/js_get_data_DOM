'use strict';

// write your code here
const x = [...document.querySelectorAll('span.population')];
const res = x.reduce(
  (sum, popul) => sum + parseInt(popul.textContent.replace(/,/g, '')),
  0,
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = Intl.NumberFormat('en-us').format(res);

averagePopulation.textContent = Intl.NumberFormat('en-us').format(
  res / x.length,
);
