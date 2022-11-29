'use strict';

const thousandsSeparator = (number) => number.toLocaleString('en-Us');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const arrPopulations = [...population].map(el => el.innerText);
const arrToNumPopulations = arrPopulations.map(el => +el.split(',').join(''));
const numberOfElementsArray = arrToNumPopulations.length;
const totalPopulation = arrToNumPopulations.reduce((acc, el) => acc + el);
const averagePopulation = totalPopulation / numberOfElementsArray;

total.textContent = thousandsSeparator(totalPopulation);
average.textContent = thousandsSeparator(averagePopulation);
