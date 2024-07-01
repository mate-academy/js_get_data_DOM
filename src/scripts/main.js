'use strict';

const spanContent = document.querySelectorAll('.population');
const populationData = Array.from(spanContent).map((element) => {
  return parseInt(element.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populationData.reduce((acc, value) => acc + value, 0);
const averagePopulation = totalPopulation / populationData.length;

const totalPopulationElement = document.querySelector('.total-population');

const averagePopulationElement = document.querySelector('.average-population');

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulationElement.textContent = numberWithCommas(totalPopulation);
averagePopulationElement.textContent = numberWithCommas(averagePopulation);
