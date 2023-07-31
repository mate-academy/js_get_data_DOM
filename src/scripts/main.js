'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const allPopulations = document.querySelectorAll('.population');

const populationMap
  = [...allPopulations]
    .map(item => +item.innerText.split(',').join(''));

const totalValue = populationMap
  .reduce((accumulator, element) => accumulator + element, 0);

totalPopulation.innerText = totalValue.toLocaleString();

averagePopulation.innerText
  = (totalValue / populationMap.length).toLocaleString();
