'use strict';

// write your code here
const populations = document.querySelectorAll('.population');

let totalPopulation = 0;
let avaragePopulation = 0;

populations.forEach((populationElement) => {
  const populationText = populationElement.textContent;
  const populationNumber = parseFloat(populationText.replace(',', ''));

  totalPopulation += populationNumber;
});

const numberOfCountries = populations.length;

avaragePopulation = Math.floor(totalPopulation / numberOfCountries);

const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAvaragePopulation = avaragePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;

document.querySelector('.average-population').textContent =
  formattedAvaragePopulation;
