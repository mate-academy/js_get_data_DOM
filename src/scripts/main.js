'use strict';

// write your code here
const populations = document.getElementsByClassName('population');

let totalPopulation = 0;

for (let i = 0; i < populations.length; i++) {
  const commaGone = Number(populations[i].textContent.replaceAll(',', ''));

  totalPopulation += commaGone;
}

const htmlTotalPop = document.getElementsByClassName('total-population');

htmlTotalPop[0].textContent = totalPopulation.toLocaleString();

const populationAverage = totalPopulation / populations.length;

const popAve = document.getElementsByClassName('average-population');

popAve[0].textContent = populationAverage.toLocaleString();
