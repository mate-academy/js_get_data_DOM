'use strict';

const population = document.querySelectorAll('.population');

const populationArray = ([...population].map(
  item => +item.innerText.replace(/,/g, ''))
);

const populationTotal = populationArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue);

const avaragePopulation = populationTotal / populationArray.length;

const regExp = /(\d)(?=(\d{3})+(\D|$))/g;

document.querySelector('.total-population').innerText
= populationTotal.toString().replace(regExp, '$1,');

document.querySelector('.average-population').innerText
= avaragePopulation.toString().replace(regExp, '$1,');
