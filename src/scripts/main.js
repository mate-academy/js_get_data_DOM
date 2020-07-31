
'use strict';

const list = document.querySelectorAll('.population');

const text = [...list].map(item => +item.innerHTML.split(',').join(''));
const totalSum = text.reduce((a, b) => a + b, 0);
const averageSum = text.reduce((a, b) => a + b / text.length, 0).toFixed(0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = totalSum;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = averageSum;
