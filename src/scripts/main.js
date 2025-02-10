'use strict';

const countriesPopulation = [...document.getElementsByClassName('population')];
const totalTag = document.querySelector('.total-population');
const averageTag = document.querySelector('.average-population');

const totalPopulation = countriesPopulation.reduce((acc, element) => {
  return acc + parseInt(element.innerHTML.replace(/,/g, ''));
}, 0);

totalTag.innerHTML = totalPopulation.toLocaleString();

averageTag.innerHTML = Math.floor(
  totalPopulation / countriesPopulation.length,
).toLocaleString();
