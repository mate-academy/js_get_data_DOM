'use strict';

const listOfPopulations = document.querySelectorAll('.population');

const arrayOfNumbers = [...listOfPopulations].map(el =>
  Number.parseInt(el.textContent.split(',').join(''))
);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = arrayOfNumbers.reduce((sum, el) => sum + el, 0)
  .toLocaleString('en-US');

const avgPopulation = document.querySelector('.average-population');

avgPopulation.innerText = (arrayOfNumbers.reduce((sum, el) => sum + el, 0)
  / arrayOfNumbers.length)
  .toLocaleString('en-US');
