'use strict';

const dataPopulation = document.querySelectorAll('.population');
const dataTotal = document.querySelector('.total-population');
const dataAverage = document.querySelector('.average-population');
const populationInArr = [...dataPopulation]
  .map(countryPop => +countryPop.innerText.split(',').join(''));
const sumOfPopulation = populationInArr.reduce((acc, country) => acc + country);
const averagePopulation = sumOfPopulation / populationInArr.length;

dataTotal.innerHTML = sumOfPopulation.toLocaleString();
dataAverage.innerHTML = averagePopulation.toLocaleString();
