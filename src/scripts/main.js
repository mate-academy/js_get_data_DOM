'use strict';

const populationList = document.querySelectorAll('.population');
const total = [...populationList].map(el => +el.innerHTML.split(',').join(''));

let totalPopulation = total.reduce((sum, cur) => sum + cur, 0);
let averagePopulation = totalPopulation / populationList.length;

totalPopulation = totalPopulation.toLocaleString('en-US');
averagePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
