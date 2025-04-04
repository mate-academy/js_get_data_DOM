'use strict';

const pop = document.querySelectorAll('.population');

const numbers = [...pop].map(value => +value.textContent.split(',').join(''));

const total = numbers.reduce((sum, item) => sum + item, 0);
const average = total / numbers.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString('en-US');
