'use strict';
const populationAll = document.querySelectorAll('span.population');

const population = Array.from(populationAll)
.map(el => el.textContent.replace(/,/g, ''))
.map(Number)
.filter(num => !isNaN(num));

const totalPopulation = population.reduce((acc, num) => acc + num, 0);
const averagePopulation = Math.round(totalPopulation / population.length);

const formatNumber = num => num.toLocaleString();

// Замінюємо текст у відповідних span
const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');
if (totalSpan) totalSpan.textContent = formatNumber(totalPopulation);
if (averageSpan) averageSpan.textContent = formatNumber(averagePopulation);

