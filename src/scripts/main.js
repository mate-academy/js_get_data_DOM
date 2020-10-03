'use strict';

const populationCounter = () => {
  const totalSpanPopulationList = document.querySelectorAll('span.population');
  const totalPopulationList = [...totalSpanPopulationList].map(
    item => item.innerText);
  const totalPopulation = totalPopulationList.map(
    x => x.replace(/[,]/g, '')).reduce((a, b) => +a + +b);
  const averagePopulation = totalPopulation / totalPopulationList.length;

  document.querySelector('span.total-population').textContent
  = `${new Intl.NumberFormat('en-US').format(totalPopulation)} people`;

  document.querySelector('span.average-population').textContent
  = `${new Intl.NumberFormat('en-US').format(averagePopulation)} people`;
};

populationCounter();
