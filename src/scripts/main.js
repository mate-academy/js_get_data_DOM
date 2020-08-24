'use strict';

// write your code here
// eslint-disable-next-line no-unused-vars
const population = document.querySelectorAll('.population');
const arr = [...population].map(item => +item.innerText.split(',').join(''));
const total = arr.reduce((sum, current) => sum + current, 0);
const average = total / arr.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
