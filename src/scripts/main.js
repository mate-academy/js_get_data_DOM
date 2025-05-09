'use strict';

const population = document.querySelectorAll('.population');
const populationData = [];

population.forEach((item) => {
  const itemText = item.textContent;

  const itemNumber = Number(itemText.replaceAll(',', ''));

  populationData.push(itemNumber);
});

const totalPopulation = populationData.reduce((acc, item) => acc + item, 0);

const averagePopulation = totalPopulation / populationData.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
