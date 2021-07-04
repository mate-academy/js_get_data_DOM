'use strict';

let countryPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

countryPopulation = [ ...countryPopulation ];

const sumOfPopulation
  = countryPopulation.reduce((acc, country) =>
    acc + +country.innerText.split(',').join(''), 0);

totalPopulation.innerHTML
  = sumOfPopulation
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

averagePopulation.innerHTML
  = Math.round((sumOfPopulation / countryPopulation.length))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
