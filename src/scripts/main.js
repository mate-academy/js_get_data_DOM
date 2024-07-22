'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('span.population');
  const populationNumber = Array.from(populationSpans)
    .map((span) => {
      const text = span.textContent;

      const numberText = text.replace(/,/g, '');

      const number = parseFloat(numberText);

      if (!isNaN(number)) {
        return number;
      } else {
        return null;
      }
    })
    .filter((num) => num !== null);
  const totalPopulation = populationNumber.reduce((sum, num) => sum + num, 0);

  const averagePopulation = totalPopulation / populationNumber.length;
  const totalPopulationSpan = document.querySelector('span.total-population');
  const averagePopulationSpan = document.querySelector(
    'span.average-population',
  );
  const options = { style: 'decimal', useGrouping: true };

  if (totalPopulationSpan) {
    totalPopulationSpan.textContent = totalPopulation.toLocaleString(
      'en-US',
      options,
    );
  }

  if (averagePopulationSpan) {
    averagePopulationSpan.textContent = averagePopulation.toLocaleString(
      'en-US',
      options,
    );
  }
});
