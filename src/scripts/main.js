'use strict';

const population = document.querySelectorAll('.population');

const arrPopulation = [...population].map(item => item.innerHTML);

const total = arrPopulation.map(el =>
  Number(el.split(',').join(''))).reduce((sum, item) => sum + item);

const average = total / arrPopulation.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total.toLocaleString('en-Us');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average.toLocaleString('en-Us');
