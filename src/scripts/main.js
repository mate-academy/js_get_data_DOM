'use strict';

const population = document.querySelectorAll('.population');

const populationArray
= ([...population].map(
  item => +item.innerText.replace(/,/g, '')));

const populationTotal
= populationArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue);

const avaragePopulation = populationTotal / populationArray.length;

document.querySelector('.total-population').innerText = populationTotal;

document.querySelector('.average-population').innerText = avaragePopulation;
