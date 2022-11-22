'use strict';

const populationByCountry = document.querySelectorAll('.population');
const populationTotal = document.querySelector('.total-population');
const populationAverage = document.querySelector('.average-population');
let worldPopulation = 0;

populationByCountry.forEach(countryPopulation => {
  worldPopulation += Number(countryPopulation.innerHTML.split(',').join(''));
});

const newFormat = new Intl.NumberFormat('en-US');

populationTotal.innerHTML = newFormat.format(worldPopulation);

populationAverage.innerHTML = newFormat.format(worldPopulation
   / populationByCountry.length);
