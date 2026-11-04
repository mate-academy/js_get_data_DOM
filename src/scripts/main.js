'use strict';

// write your code here
const allPops = document.querySelectorAll('.population');

const allPopsN = Array.from(allPops).map((p) => {
  const allPopsText = p.textContent.replaceAll(',', '');
  return Number(allPopsText);
});

const totalPopulation = allPopsN.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const averagePopulation = totalPopulation / allPopsN.length;

const averagePopulationSpan = document.querySelector('.average-population');
const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
