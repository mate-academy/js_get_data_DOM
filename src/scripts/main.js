'use strict';

const populations = document.querySelectorAll('.population');
const sum = document.querySelector('.total-population');
const arrSum = [...populations]
  .map(countryPop => +countryPop.innerText.split(',').join(''));

const average = document.querySelector('.average-population');
const totalPopulation = arrSum.reduce((acc, country) => acc + country);
const averagePopulation = totalPopulation / arrSum.length;

sum.innerHTML = totalPopulation.toLocaleString();
average.innerHTML = averagePopulation.toLocaleString();
