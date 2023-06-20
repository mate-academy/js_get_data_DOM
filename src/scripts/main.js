'use strict';

// write your code here
const items = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populations = [...items].map(elem => +elem.innerText.split(',').join(''));
const total = populations.reduce((a, b) => a + b, 0);
const average = total / populations.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
