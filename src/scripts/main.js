'use strict';

const body = document.querySelector('body');
const populationList = body.querySelectorAll('.population');
const totalPopulation = body.querySelector('.total-population');
const averagePopulation = body.querySelector('.average-population');

const populationArray = [];

populationList.forEach((item) => {
  populationArray.push(Number(item.textContent.replaceAll(',', '')));
});

const total = populationArray.reduce((accum, current) => {
  return accum + current;
}, 0);

totalPopulation.textContent = total.toLocaleString();

const average = total / populationArray.length;

averagePopulation.textContent = Math.round(average).toLocaleString();
