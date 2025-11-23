'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];
const numberOfPopulation = population.map((num) => num.textContent.replaceAll(',', ''));

const total = numberOfPopulation.reduce((sum, elem) => sum + +elem, 0);
const average = Math.round(total / population.length);

document.querySelector('.total-population').textContent = total.toLocaleString('en-AU');

document.querySelector('.average-population').textContent = average.toLocaleString('en-AU');
