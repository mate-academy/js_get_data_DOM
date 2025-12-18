'use strict';

const populationTag = document.querySelectorAll('span.population');

let population = 0;

populationTag.forEach((el) => {
  const tmp = el.textContent.split(',');
  const countryPopulation = Number(tmp.join(''));

  population += countryPopulation;
});

const countries = document.querySelectorAll('li');
const numberOfCountries = countries.length;

const average = population / numberOfCountries;

const totalTag = document.querySelector('.total-population');
const averagePopulationTag = document.querySelector('.average-population');
const outputTotal = new Intl.NumberFormat('en-US').format(population);
const outputAverage = new Intl.NumberFormat('en-US').format(average.toFixed(0));

totalTag.textContent = outputTotal;
averagePopulationTag.textContent = outputAverage;
