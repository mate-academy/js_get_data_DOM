'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const countriesPopultaion = [...document.querySelectorAll('.population')]
  .map(country => +country.innerText.split(',').join(''));

const totalPopulation = countriesPopultaion
  .reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / countriesPopultaion.length;

total.innerText = totalPopulation.toLocaleString('en');
average.innerText = averagePopulation.toLocaleString('en');
