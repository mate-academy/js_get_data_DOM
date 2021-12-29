'use strict';

const span = document.querySelectorAll('.population');
const spanNumbers = [...span].map(elem => +elem.innerText.split(',').join(''));
const total = spanNumbers.reduce((a, b) => a + b);
const average = total / spanNumbers.length;

const totalPopulation = total.toLocaleString('en-US');
const averagePopulation = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = totalPopulation;

document.querySelector('.average-population').textContent = averagePopulation;
