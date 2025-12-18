'use strict';

const populationTag = document.querySelector('span.population');

const populationString = populationTag.textContent;
const tmp = populationString.split(',');

const totalPopulation = Number(tmp.join(''));

const countries = document.querySelectorAll('li');
const numberOfCountries = countries.length;

const average = totalPopulation / numberOfCountries;

const totalTag = document.querySelector('.total-population');
const averagePopulationTag = document.querySelector('.average-population');
const outputTotal = new Intl.NumberFormat('en-US').format(totalPopulation);
const outputAverage = new Intl.NumberFormat('en-US').format(average.toFixed(0));

totalTag.textContent = outputTotal;
averagePopulationTag.textContent = outputAverage;
