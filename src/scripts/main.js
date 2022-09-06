'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationItems = [...document.querySelectorAll('.population')];

const normalize = str => str.toLocaleString('en-US');

const totalPopulation = populationItems.reduce(
  (sum, item) => sum + Number(item.textContent.replace(/,/g, '')), 0,
);

total.innerText = normalize(totalPopulation);
average.innerText = normalize(totalPopulation / populationItems.length);
