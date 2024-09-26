'use strict';

const populations = [...document.querySelectorAll('.population')];
const normalizePopulation = [...population].map((text) =>
	    parseInt(text.innerText.split(",").join(""))
	  );
 

const populationSum = populations.reduce((sum, population) => {
  return sum + population;
}, 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = populationSum.toLocaleString();

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = (populationSum / populations.length)
  .toLocaleString();
