'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationArr = [];

document.querySelectorAll('.population').forEach(el => {
  populationArr.push(+el.innerText.replace(/,/g, ''));
});

const total = populationArr.reduce((a, b) => a + b);
const average = (total / populationArr.length);

totalPopulation.innerText = total.toLocaleString('En');
averagePopulation.innerText = average.toLocaleString('En');
