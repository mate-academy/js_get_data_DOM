'use strict';

const countries = [...document.querySelectorAll('.population')];
const displayTotal = document.querySelector('.total-population');
const displayAverage = document.querySelector('.average-population');

const totalPopulation = countries
  .map(country => {
    return Number(country.innerHTML.split(',').join(''));
  })
  .reduce((acc, rec) => acc + rec);

const avaragePopulation = totalPopulation / countries.length;

displayTotal.innerHTML = totalPopulation
  .toLocaleString()
  .replace(/\s/g, ',');

displayAverage.innerHTML = avaragePopulation
  .toLocaleString()
  .replace(/\s/g, ',');
