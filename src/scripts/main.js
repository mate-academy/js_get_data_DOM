'use strict';

const population = document.querySelectorAll('.population');
const populationArr = [...population];

const totalPopulation = populationArr
  .map(item => +(item.innerText.replace(/[\s.,]/g, '')))
  .reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populationArr.length;

const totalElement = document.querySelector('.total-population');

totalElement.innerHTML = totalPopulation;

const averageElement = document.querySelector('.average-population');

averageElement.innerHTML = averagePopulation;
