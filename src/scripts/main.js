'use strict';

// write your code here

const countriesPopulation = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

let totalPopulation = 0;

countriesPopulation.forEach((countryPopulation) => {
  const parsedPopulation = Number(
    countryPopulation.innerText.replaceAll(',', ''),
  );

  if (!isNaN(parsedPopulation)) {
    totalPopulation += parsedPopulation;
  }
});

const averagePopulation = totalPopulation / countriesPopulation.length;

totalPopulationEl.innerText = totalPopulation.toLocaleString();

averagePopulationEl.innerText = averagePopulation.toLocaleString('en-GB', {
  maximumFractionDigits: 0,
});
