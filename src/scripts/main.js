'use strict';

let population = document.querySelectorAll('.population');

population = [...population].map(n => +n.innerHTML.replace(/[,]/g, ''));

const total = population.reduce((a, b) => a + b);
const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total.toLocaleString().replace(/\s/g, ',');
averagePopulation.innerHTML = average.toLocaleString().replace(/\s/g, ',');
