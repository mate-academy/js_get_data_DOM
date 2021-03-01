'use strict';

const searchedClass = document.querySelectorAll('.population');
const listWithPopulation = [...searchedClass].map(element =>
  Number(element.innerText.replaceAll(',', '')));

const totalPopulation = listWithPopulation.reduce((sum, element) =>
  sum + element);
const averagePopulation = totalPopulation / listWithPopulation.length;

document.querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString();

document.querySelector('.average-population')
  .innerText = averagePopulation.toLocaleString();
