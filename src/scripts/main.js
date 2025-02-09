'use strict';

const populationArray = document.querySelectorAll('.population');
let summaryPopulation = 0;

for (const span of populationArray) {
  // console.log(span.textContent);

  if (!Number.isNaN(span.textContent)) {
    const formattedPopulation = span.textContent.replaceAll(',', '');

    summaryPopulation += +formattedPopulation;
  }
}

const formattedSummaryPopulation = summaryPopulation.toLocaleString('en-US');
const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.textContent = formattedSummaryPopulation;

const averagePopulation = Math.round(
  summaryPopulation / populationArray.length,
);
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

const averagePopulationSpan = document.querySelector('.average-population');

averagePopulationSpan.innerHTML = formattedAveragePopulation;
