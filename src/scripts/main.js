'use strict';

// write your code here
const populations = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numOnly = populations.map(el => +(el.textContent.split(',').join('')));
const total = numOnly.reduce((x, y) => x + y, 0);
const average = total / populations.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
