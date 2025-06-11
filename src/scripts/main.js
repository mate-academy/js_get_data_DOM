'use strict';

const populations = [...document.querySelectorAll('.population')]
.map(el => +el.textContent.replace(/,/g, ''));

const total = populations.reduce((acc, val) => acc + val, 0);
const average = total / populations.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
