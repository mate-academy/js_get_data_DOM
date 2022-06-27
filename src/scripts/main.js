'use strict';

const findSpan = document.querySelectorAll('.population');

const numbers = [...findSpan].map(numb =>
+(numb.innerText.split(',').join('')));

const totalPopulation = Math.round(numbers.reduce((c1, c2) => c1 + c2, 0));
const averagePopulation = totalPopulation / numbers.length;

const aveInHtml = document.querySelector('.average-population');
const totalInHtml = document.querySelector('.total-population');

aveInHtml.textContent = averagePopulation.toLocaleString('en');
totalInHtml.textContent = totalPopulation.toLocaleString('en');
