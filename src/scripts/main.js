'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationArray = [];

populationList.forEach((item) => {
  populationArray.push(Number(item.textContent.replaceAll(',', '')));
});

const totalData = populationArray.reduce((accum, current) => {
  return accum + current;
}, 0);

const averageData = totalData / populationArray.length;

totalPopulation.textContent = totalData.toLocaleString();
averagePopulation.textContent = averageData.toLocaleString();
