'use strict';

const listOfPopulations = document.querySelectorAll('.population');

const arrayOfNumbers = [...listOfPopulations].map(el =>
  Number.parseInt(el.textContent.split(',').join(''))
);

const totalPopulation = document.querySelector('.total-population');
const sumOfPopulation = arrayOfNumbers.reduce((sum, el) => sum + el, 0);

totalPopulation.innerText = sumOfPopulation.toLocaleString('en-US');

const avgPopulation = document.querySelector('.average-population');

avgPopulation.innerText = (sumOfPopulation / arrayOfNumbers.length)
  .toLocaleString('en-US');
