'use strict';

const totalPopulation = document.querySelector('.total-population');

const averagePopulation = document.querySelector('.average-population');

const countriesList = document.querySelectorAll('.population');

const total = [...countriesList].reduce((sum, country) => {
  const populationNumber = Number(country.innerHTML.split(',').join(''));

  return sum + populationNumber;
}, 0);

const average = total / countriesList.length;

totalPopulation.innerText = total.toLocaleString('en-US');

averagePopulation.innerText = average.toLocaleString('en-US');
