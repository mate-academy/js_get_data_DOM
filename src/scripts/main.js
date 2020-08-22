'use strict';

const populations = document.querySelectorAll(`.population`);
const totalPopulationResult = document.querySelector(`.total-population`);
const averagePopulationResult = document.querySelector(`.average-population`);

const populationsArray = [];

for (let i = 0; i < populations.length; i++) {
  populationsArray.push(Number(populations[i].innerHTML.split(`,`).join(``)));
}

const totalPopulation = populationsArray.reduce((accum, cur) => accum + cur);

totalPopulationResult.innerText = totalPopulation.toLocaleString(`en-US`);

averagePopulationResult.innerHTML = (totalPopulation / populationsArray.length)
  .toLocaleString(`en-US`);
