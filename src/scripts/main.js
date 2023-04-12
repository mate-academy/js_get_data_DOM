'use strict';

// write your code here
const populationSpans = [...document.querySelectorAll('.population')];
const populationValues = populationSpans.map(item =>
  +item.innerHTML.split(',').join(''));

const populationTotal = populationValues.reduce((acc, item) => acc + item, 0);
const populationAverage = populationTotal / populationValues.length;

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

const formatNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulationSpan.addEventListener('click', () => {
  totalPopulationSpan.innerText = formatNum(populationTotal);
});

averagePopulationSpan.addEventListener('click', () => {
  averagePopulationSpan.innerText = formatNum(populationAverage);
});
