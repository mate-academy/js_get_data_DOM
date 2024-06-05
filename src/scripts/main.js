'use strict';

const populationArray = [...document.querySelectorAll('.population')];
const populationNums = [];

populationArray.forEach((element) => {
  const elementData = element.innerHTML.replace(/,/g, '');

  return populationNums.push(+elementData);
});

const totalPopulationNum = populationNums.reduce((acc, cur) => acc + cur, 0);
const averagePopulationNum = totalPopulationNum / populationNums.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalPopulationNum.toLocaleString('en-US');
averagePopulation.textContent = averagePopulationNum.toLocaleString('en-US');
