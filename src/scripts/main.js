'use strict';

const spans = document.querySelectorAll('span.population');
const totalPopulationElem = document.querySelector('.total-population');
const avgPopulationElem = document.querySelector('.average-population');

const populations = [...spans].map(span => +span.innerText.replaceAll(',', ''));
const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
const avgPopulation = totalPopulation / populations.length;

totalPopulationElem.innerText = totalPopulation.toLocaleString('en-US');
avgPopulationElem.innerText = avgPopulation.toLocaleString('en-US');
