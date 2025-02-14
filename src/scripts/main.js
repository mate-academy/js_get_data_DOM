'use strict';

const body = document.body;
const populate = [...body.querySelectorAll('.population')];
const arrayPopulation = populate.map(
  (item) => +item.textContent.replaceAll(',', ''),
);
const totalPopulate = arrayPopulation.reduce((acc, num) => acc + num, 0);
const averagePopulate = Math.round(totalPopulate / arrayPopulation.length);

const totalPopulationHtml = body.querySelector('.total-population');
const averagePopulationHtml = body.querySelector('.average-population');

totalPopulationHtml.textContent = totalPopulate.toLocaleString('en-Us');
averagePopulationHtml.textContent = averagePopulate.toLocaleString('en-Us');
