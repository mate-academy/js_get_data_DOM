'use strict';

const population = document.querySelectorAll('.population');
const formatedNumbers = [...population].map(element => element.innerText);
const unformatedNumbers = formatedNumbers.map(
  item => +item.split(',').join('')
);
const totalPopulation = unformatedNumbers.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / unformatedNumbers.length;

document.querySelector('.total-population').innerHTML
= totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML
= averagePopulation.toLocaleString('en-US');
