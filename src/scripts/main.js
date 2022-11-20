'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationNodes = [...document.querySelectorAll('.population')];
const population = populationNodes.map(el => +el.textContent.replace(/,/g, ''));

const total = population.reduce((a, b) => a + b);
const average = total / population.length;

const separate = value => value.toLocaleString('en');

totalPopulation.innerText = separate(total);
averagePopulation.innerText = separate(average);
