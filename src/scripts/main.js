'use strict';

const populationByCountry = [...document.querySelectorAll('.population')];

const totalPopulationAmount = populationByCountry.reduce((prev, item) => {
  return prev + Number(item.innerText.replaceAll(',', ''));
}, 0);

const averagePopulation = totalPopulationAmount / populationByCountry.length;

document.querySelector('.total-population').innerHTML =
  `${totalPopulationAmount.toLocaleString('en-US')}`;

document.querySelector('.average-population').innerHTML =
  `${Math.round(averagePopulation).toLocaleString('en-US')}`;
