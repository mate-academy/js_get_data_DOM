'use strict';

const itemsWithPopulation = document.querySelectorAll('.population');
const listWithPopulation = [...itemsWithPopulation]
  .map(element => +element.innerText.replace(/,/g, ''));

const sumOfPopulation = listWithPopulation
  .reduce((acum, value) => acum + value, 0);

const avarageValueOfPopulation = sumOfPopulation / listWithPopulation.length;

const totalInHtml = document.querySelector('.total-population');
const avarageInHtml = document.querySelector('.average-population');

totalInHtml.innerText = sumOfPopulation.toLocaleString('en');
avarageInHtml.innerText = avarageValueOfPopulation.toLocaleString('en');
