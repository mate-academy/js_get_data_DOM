'use strict';

const populations = document.querySelectorAll('.population');
const rawPopulations = [...populations].map((element) => element.innerText);
const numericPopulations = rawPopulations.map((element) => {
  const regex = new RegExp(',', 'g');
  const cleanValue = element.replace(regex, '');

  return Number.parseInt(cleanValue);
});

const totalPopulation = numericPopulations.reduce((total, current) => {
  return total + current;
});
const totalPopulationElement = document.querySelector(
  '.total-population'
);

totalPopulationElement.innerText = totalPopulation.toLocaleString();

const avgPopulation = totalPopulation / numericPopulations.length;
const avgPopulationElement = document.querySelector(
  '.average-population'
);

avgPopulationElement.innerText = avgPopulation.toLocaleString();
