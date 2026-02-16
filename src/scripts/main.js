'use strict';

const spanData = document.querySelectorAll('.population');
const convertedSpanData = Array.from(spanData).map((span) => {
  const raw = span.textContent;
  const cleaned = raw.trim().replace(/[,\s]/g, '');
  const numValue = Number(cleaned);

  if (Number.isNaN(numValue)) {
    return 0;
  }

  const population = numValue;

  return population;
});

const totalPopulation = convertedSpanData.reduce((acc, population) => {
  return acc + population;
}, 0);
const averagePopulation = Math.round(
  totalPopulation / convertedSpanData.length,
);

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
