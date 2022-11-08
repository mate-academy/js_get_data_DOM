'use strict';

const population = [...document.getElementsByClassName('population')];
const averagePopulation = document.getElementsByClassName('average-population');
const totalPopulation = document.getElementsByClassName('total-population');

const total = population.reduce((acc, el) => {
  return acc + Number(el.innerText.split(',').join(''));
}, 0);

totalPopulation[0].innerText = total.toLocaleString();

const average = total / population.length;

averagePopulation[0].textContent = average.toLocaleString();
