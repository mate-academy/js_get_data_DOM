'use strict';

const populationTags = [...document.querySelectorAll('.population')];
const amountPopulation = populationTags.map(
  (elem) => +elem.innerHTML.split(',').join(''),
);

let totalPopulation = amountPopulation.reduce((total, elem) => total + elem, 0);
let averagePopulation = Math.round(totalPopulation / amountPopulation.length);

totalPopulation = totalPopulation.toLocaleString('en-US');
averagePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
