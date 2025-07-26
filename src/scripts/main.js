'use strict';

const dataPopulations = document.querySelectorAll('.population');

const totalPopulation = Array.from(dataPopulations).reduce((prev, element) => {
  const newText = element.textContent.replaceAll(',', '');

  return prev + parseFloat(newText);
}, 0);

const averagePopulation = totalPopulation / Array.from(dataPopulations).length;

const formatedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formatedAveragePopulation = averagePopulation.toLocaleString('en-US');

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = formatedAveragePopulation;
totalSpan.textContent = formatedTotalPopulation;
