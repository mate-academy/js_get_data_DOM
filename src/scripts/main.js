'use strict';

const countryList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...countryList].reduce((acc, country) => {
  const populationNumber = +country.innerHTML.split(',').join('');

  return acc + populationNumber;
}, 0);

const average = total / countryList.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');

averagePopulation.innerHTML = average.toLocaleString('en-US');
