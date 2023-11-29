'use strict';

const spans = document.querySelectorAll('.population');
const data = [...spans].map(span => +span.textContent.split(',').join(''));
const total = data.reduce((acc, it) => acc + it, 0);
const average = total / data.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
