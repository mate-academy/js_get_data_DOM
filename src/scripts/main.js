'use strict';

const numbers = document.querySelectorAll('.population');

const list = [];

numbers.forEach(item => list.push(item.innerText));

const population = list.map(item => {
  return +item.split(',').join('');
});
const totalPopulation = population.reduce((prev, num) => prev + num, 0);
const avaragePopulation = totalPopulation / population.length;

const totalToIncert = totalPopulation.toLocaleString('en-US');
const avarageToIncert = avaragePopulation.toLocaleString('en-US');

const elementTotal = document.querySelectorAll('.total-population');
const elementAvarage = document.querySelectorAll('.average-population');

elementTotal[0].innerHTML = totalToIncert;
elementAvarage[0].innerHTML = avarageToIncert;
