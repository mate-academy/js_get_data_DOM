'use strict';
// write your code here

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const totalAverage = document.querySelector('.average-population');
const populationSum = [...populations]
  .map(item => item.innerText.split(',').join(''))
  .reduce((sum, currentPopulation) => (
    (+sum) + (+currentPopulation)
  ), 0);
const averagePopulation = populationSum / populations.length;

totalPopulation.innerHTML = `${populationSum.toLocaleString('en-GB')}`;

totalAverage.innerHTML = `${averagePopulation.toLocaleString('en-GB')}`;
