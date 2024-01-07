'use strict';

const spans = [...document.getElementsByClassName('population')];
const spanNumbers = spans.map(el => +el.innerText.replace(/,/g, ''));

const spanTotal = document.getElementsByClassName('total-population')[0];
const spanAverage = document.getElementsByClassName('average-population')[0];

const totalPopulation = spanNumbers.reduce((prev, current) => prev + current);
const averagePopulation = totalPopulation / spanNumbers.length;

spanTotal.textContent = totalPopulation.toLocaleString('en-US');
spanAverage.textContent = averagePopulation.toLocaleString('en-US');
