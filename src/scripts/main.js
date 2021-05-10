'use strict';

const populationData = document.querySelectorAll('.population');
const populationValue = [...populationData].map(item =>
  Number(item.innerText.split(',').join('')));
const totalPopulation = populationValue
  .reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populationValue.length;
const totalText = totalPopulation
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const averageText = averagePopulation
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = totalText;
average.innerText = averageText;
