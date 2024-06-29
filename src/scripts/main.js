'use strict';

// write your code here
const x = [...document.querySelectorAll('span.population')];
let sum = 0;

for (let i = 0; i < x.length; i++) {
  const textContent = x[i].textContent.replace(/,/g, '');

  if (!isNaN(textContent)) {
    sum += +textContent;
  }
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = Intl.NumberFormat('en-us').format(sum);

averagePopulation.textContent = Intl.NumberFormat('en-us').format(
  sum / x.length,
);
