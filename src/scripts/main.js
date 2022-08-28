'use strict';

const populations = document.querySelectorAll('.population');
const arrOfPopulations = [ ...populations ];

const sumPopulations = arrOfPopulations
  .reduce((prev, elem) => prev + +elem.innerText.split(',').join(''), 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = thousandsSeparate(sumPopulations);

const averagePopulation = document.querySelector('.average-population');
const avergeSum = sumPopulations / arrOfPopulations.length;

averagePopulation.innerHTML = thousandsSeparate(avergeSum);

function thousandsSeparate(num) {
  return num.toString()
    .split('')
    .reverse()
    .map((char, i) => char + (i % 3 ? '' : ','))
    .reverse()
    .join('');
}
