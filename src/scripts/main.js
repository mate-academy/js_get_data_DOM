'use strict';

const spans = document.querySelectorAll('span.population')
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const amounts = [...spans].map(item => item.innerText);
const amountsNumbers = amounts.map(item => +item.split(',').join(''));

const total = amountsNumbers.reduce((a, b) => a + b, 0);
const average = total / amountsNumbers.length;

const formatter = Intl.NumberFormat('en-US');

totalPopulation.textContent = formatter.format(total);
averagePopulation.textContent = formatter.format(average);
