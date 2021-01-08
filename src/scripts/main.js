'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationArray = [...population]
  .map(countryPop => +countryPop.innerText.split(',').join(''));
const populationSum = populationArray.reduce((acc, country) => acc + country);
const populationAverage = populationSum / populationArray.length;

total.innerHTML = populationSum.toLocaleString();
average.innerHTML = populationAverage.toLocaleString();
