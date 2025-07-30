/* eslint-disable */
'use strict';

const  population = [...document.querySelectorAll('.population')];

const populationSum = population.reduce((accumulator, currentValue) => accumulator + +currentValue.innerHTML.replaceAll(',', ''), 0);

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = populationSum.toLocaleString('en-US');
average.innerHTML = Math.ceil(populationSum / population.length).toLocaleString('en-US');

