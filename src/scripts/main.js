'use strict';

const populationArray = document.querySelectorAll('.population');

const formattedPopulation = [...populationArray]
  .map(value => +(value.innerText.replace(/,/g, ''))
  );

const totalPopulation = formattedPopulation.reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / formattedPopulation.length;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.innerHTML = averagePopulation.toLocaleString('en-US');
totalElement.innerHTML = totalPopulation.toLocaleString('en-US');
