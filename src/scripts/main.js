'use strict';

const populationNode = document.querySelectorAll('.population');
const population = [...populationNode].map(p => +p.innerText.split(',').join(''));
let total = population.reduce((a, b) => a + b, 0);
let average = total / population.length;
const totalEl = document.querySelector('.total-population');
const avgEl = document.querySelector('.average-population');
const pattern = /(\d)(?=(\d{3})+(?!\d))/g;

total = total.toString().replace(pattern, '$1,');
average = average.toString().replace(pattern, '$1,');

totalEl.innerText = total;
avgEl.innerText = average;
