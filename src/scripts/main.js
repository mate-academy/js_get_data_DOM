'use strict';

const listPopulation = [...document.querySelectorAll('.population')];
const arrPopulation = listPopulation.map(item =>
  +item.textContent.split(',').join(''));

const totalpopulation = arrPopulation.reduce((a, b) => a + b);

document.querySelector('.total-population').textContent
= totalpopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent
= (totalpopulation / arrPopulation.length).toLocaleString('en-US');
