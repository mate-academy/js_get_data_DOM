'use strict';

const list = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationList = [...list].map(
  item => Number(item.innerText.split(',').join(''))
);
const totalPopulation = populationList.reduce((sum, prev) => sum + prev, 0);
const averagePopulation = totalPopulation / populationList.length;

total.innerText = totalPopulation.toLocaleString('en-Us');
average.innerText = averagePopulation.toLocaleString('en-Us');
