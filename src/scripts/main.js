'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

const setting = population
  .map((el) => {
    return el.textContent;
  })
  .map((el) => {
    return el.replaceAll(',', '');
  })
  .map((el2) => {
    return +el2;
  });

for (const ch of setting) {
  total += ch;
}

const average = total / setting.length;

totalPopulation.textContent = total;
averagePopulation.textContent = average;
