'use strict';

const thousandsSeparator = (number) => number.toLocaleString('en-Us');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const arrayPopulations = [...population].map(el => el.innerText);
const arrayToNumPopulations = arrayPopulations.map(el =>
  +el.split(',').join(''));
const numberOfElementsArray = arrayToNumPopulations.length;
const totalPopulation = arrayToNumPopulations.reduce((acc, el) => acc + el);
const averagePopulation = totalPopulation / numberOfElementsArray;

total.textContent = thousandsSeparator(totalPopulation);
average.textContent = thousandsSeparator(averagePopulation);
