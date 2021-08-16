'use strict';

// write your code here
const populationHTMLCollection = document.querySelectorAll('span.population');
const populationData = [...populationHTMLCollection]
  .map(item => +(item.textContent.split(',').join('')) || 0);

const totalPopulation = populationData
  .reduce((accum, value) => accum + value, 0);

const averagePopulation = totalPopulation / populationData.length;

const totalItem = document.querySelector(`.total-population`);

totalItem.textContent = totalPopulation;
totalItem.textContent = totalPopulation;

const averageItem = document.querySelector(`.average-population`);

averageItem.textContent = averagePopulation;
