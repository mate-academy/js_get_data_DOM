'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const population = populationElements.map((item) => {
  let text = item.textContent;

  text = text.replaceAll(',', '');

  const countPopulation = Number(text);

  return countPopulation;
});

const totalPopulation = population.reduce((sum, num) => sum + num, 0);
const avaragePopulation = Math.round(totalPopulation / population.length);

const elemTotalCalc = document.querySelector('.total-population');
const elemAvgCalc = document.querySelector('.average-population');

elemTotalCalc.textContent = totalPopulation.toLocaleString('en-US');
elemAvgCalc.textContent = avaragePopulation.toLocaleString('en-US');
