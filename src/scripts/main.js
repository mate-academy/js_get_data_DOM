'use strict';

const totalPopulation = document.querySelector('.total-population');
const items = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const list = [...items];

const total = list.reduce((sum, item) => sum + Number(item.innerText.split(',')
  .join('')), 0);

const average = total / list.length;

totalPopulation.innerText = total;

averagePopulation.innerText = average;
