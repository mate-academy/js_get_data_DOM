'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const populationElements = document.querySelectorAll('.population');

  let totalPopulation = 0;
  let populationCount = 0;

  populationElements.forEach(function(element) {
    const populationNumber = parseInt(
      element.textContent.replace(/,/g, ''),
      10,
    );

    if (!isNaN(populationNumber)) {
      totalPopulation += populationNumber;
      populationCount++;
    }
  });

  const averagePopulation
    = populationCount > 0 ? totalPopulation / populationCount : 0;

  const formattedTotal = numberWithCommas(totalPopulation);
  const formattedAverage = numberWithCommas(averagePopulation.toFixed(2));

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
});
