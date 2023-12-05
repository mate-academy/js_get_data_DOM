'use strict';

const data = document.querySelectorAll('.population');
const numbers = [...data].map(bit => +bit.textContent.split(',').join(''));
const total = numbers.reduce((acc, current) => acc + current, 0);
const average = total / numbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');