'use strict';

const population = document.querySelectorAll('.population');

const content = Array.from(population).map(element => element.textContent);

const populationArray = content.map(item => Number(item.replace(/,/g, '')));

const totalPopulation = populationArray.reduce((a, b) => a + b);

const averagePopulation = totalPopulation / populationArray.length;

document.querySelector('.total-population').textContent
= totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent
= averagePopulation.toLocaleString('en-US');
