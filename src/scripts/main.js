'use strict';

const population = document.querySelectorAll('.population');

const totalPopulation = [...population]
  .map(num => Number(num.innerText.replace(/,/g, '')))
  .reduce((previousValue, currentValue) => previousValue + currentValue);

document.querySelector('.total-population')
  .innerText = totalPopulation.toString();

document.querySelector('.average-population')
  .innerText = (totalPopulation / population.length).toString();
