'use strict';

const population = document.querySelectorAll('.population');
const convertToNomber = [...population].map(elem => elem.innerText);
const numbers = convertToNomber.map(el => +el.split(',').join(''));
const totalPopulation = numbers.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / numbers.length;

document.querySelector('.total-population').innerHTML
  = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML
  = averagePopulation.toLocaleString('en-US');
