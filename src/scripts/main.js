'use strict';

// write your code here
const populationArr = [...document.querySelectorAll('.population')];
const population = populationArr.map(el => +el.textContent.replace(/,/g, ''));

const totalPopulation = population.reduce((acc, cur) => acc + cur, 0);
const averagePopulation = totalPopulation / population.length;

const totalSelector = document.querySelector('.total-population');
const avarageSelector = document.querySelector('.average-population');

const formatNum = num => num.toLocaleString('en');

totalSelector.textContent = formatNum(totalPopulation);
avarageSelector.textContent = formatNum(averagePopulation);
