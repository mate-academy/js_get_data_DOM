'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const populationElements = document.querySelectorAll('.population');

  const populationNumbers = Array.from(populationElements).map((element) => {
    const populationNumber = Number(element.textContent.replace(/,/g, ''));

    return !isNaN(populationNumber) ? populationNumber : 0;
  });

  const totalPopulation = populationNumbers.reduce(
    (sum, populationNumber) => sum + populationNumber,
    0,
  );
  const populationCount = populationNumbers.length;

  const averagePopulation
    = populationCount > 0 ? totalPopulation / populationCount : 0;

  const formattedTotal = numberWithCommas(totalPopulation);
  const formattedAverage = numberWithCommas(averagePopulation.toFixed(2));

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;

  function numberWithCommas(number) {
    return number.toLocaleString();
  }
});
