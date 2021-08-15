'use strict';

let population = document.querySelectorAll('.population');

population = [...population].map(item => +item.innerText.split(',').join(''));

const totalPopulation = population.reduce((sum, item) => sum + item, 0);

const countryAmount = population.reduce((sum) => sum + 1, 0);

const averagePopulation = Math.trunc(totalPopulation / countryAmount);

const total = document.querySelector('.total-population');

total.innerText = totalPopulation.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.innerText = averagePopulation.toLocaleString('en-US');
