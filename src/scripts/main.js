'use strict';

const populationList = [...document.querySelectorAll('.population')];
const spanElementTotal = document.querySelector('.total-population');
const spanElementAverage = document.querySelector('.average-population');

const totalPopulation = populationList
  .map((populationItem) => {
    return +populationItem.textContent.split(',').join('');
  })
  .reduce((accumulator, currentValue) => accumulator + currentValue);

const averagePopulation = totalPopulation / populationList.length;

spanElementTotal.textContent = totalPopulation.toLocaleString();
spanElementAverage.textContent = averagePopulation.toLocaleString();
