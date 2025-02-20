'use strict';

const items = [...document.querySelectorAll('span.population')];

const population = items.map(item => +item.innerText.replaceAll(',', ''));

const total = population.reduce((prev, num) => (prev + num));
const average = total / population.length;

const totalPopulation = document.querySelector('span.total-population');

totalPopulation.textContent = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('span.average-population');

averagePopulation.textContent = average.toLocaleString('en-US');
