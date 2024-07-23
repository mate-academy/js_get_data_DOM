'use strict';

// write your code here
const collection = document.querySelectorAll('.population');

const population = [...collection].map((item) => Number(item.innerText.split(',').join('')));

const totalPopulation = population.reduce((initial, item) => initial + item, 0);
const avgPopulation = totalPopulation / population.length;

const avgPopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');

avgPopulationElement.innerText = avgPopulation.toLocaleString('en-US');
totalPopulationElement.innerText = totalPopulation.toLocaleString('en-US');
