'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.avarage-population');

const populationList = [...population].map(
  item => Number(item.innerText.split(',').join(''))
);

const totalPopulation = populationList.reduce((sum, prev) => sum + prev, 0);
const avaragePopulation = totalPopulation / populationList.length;

total.innerText = totalPopulation.toLocaleString('en-Us');
avarage.innerText = avaragePopulation.toLocaleString('en-Us');
