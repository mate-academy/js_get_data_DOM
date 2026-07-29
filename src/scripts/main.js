'use strict';

function getData(targets) {
  const populationElements = document.querySelectorAll(targets);

  let totalPopulation = 0;
  let count = 0;

  populationElements.forEach((element) => {
    const textElement = element.innerText;
    const number = parseInt(textElement.replace(/,/g, ''));

    if (!isNaN(number)) {
      totalPopulation += number;
      count++;
    }
  });

  const averagePopulation = count > 0 ? Math.round(totalPopulation / count) : 0;
  const formatAveragePopulation = averagePopulation.toLocaleString();
  const formatTotalPopulation = totalPopulation.toLocaleString();

  document.querySelector('.total-population').textContent =
    formatTotalPopulation;

  document.querySelector('.average-population').textContent =
    formatAveragePopulation;
}

getData('.population');
