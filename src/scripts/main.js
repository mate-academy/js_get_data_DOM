'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const values = [...population]
.map(number => parseInt(number.textContent.split(',').join('')));

const total = values.reduce((acc, val) => acc + val);
const average = total / values.length;

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
