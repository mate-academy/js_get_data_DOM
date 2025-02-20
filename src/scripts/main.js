'use strict';

const populationTag = [...document.querySelectorAll('.population')];
const amountPopulation = populationTag.map(
  (el) => +el.innerHTML.split(',').join(''),
);

let totalPopulation = amountPopulation.reduce((total, el) => total + el, 0);
let averagePopulation = Math.round(totalPopulation / amountPopulation.length);

totalPopulation = totalPopulation.toLocaleString('en-US');
averagePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
