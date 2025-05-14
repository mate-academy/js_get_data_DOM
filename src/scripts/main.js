'use strict';


document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('.population');
  const totalPopulationSpan = document.querySelector('.total-population');
  const averagePopulationSpan = document.querySelector('.average-population');

  let totalPopulation = 0;
  const populations = [];

  populationSpans.forEach((span) => {
    const populationText = span.textContent;
    const populationNumber = parseInt(populationText.replace(/,/g, ''), 10);

    if (!isNaN(populationNumber)) {
      populations.push(populationNumber);
      totalPopulation += populationNumber;
    }
  });

  const numberOfCountries = populations.length;
  const averagePopulation =
    numberOfCountries > 0 ? totalPopulation / numberOfCountries : 0;

  const formatter = new Intl.NumberFormat('en-US');

  const formattedTotal = formatter.format(totalPopulation);
  const formattedAverage = formatter.format(Math.round(averagePopulation));

  if (totalPopulationSpan) {
    totalPopulationSpan.textContent = formattedTotal;
  }

  if (averagePopulationSpan) {
    averagePopulationSpan.textContent = formattedAverage;
  }
});
