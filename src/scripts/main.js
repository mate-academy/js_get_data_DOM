'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalPopulationNum = 0;

population.forEach((element) => {
  const value = element.textContent;

  const number = value.replaceAll(',', '');

  const numValue = Number(number);

  totalPopulationNum += numValue;
});

const averagePopu = totalPopulationNum / population.length;

totalPopulation.textContent = totalPopulationNum.toLocaleString('en-US');

averagePopulation.textContent = Math.round(averagePopu).toLocaleString('en-US');
