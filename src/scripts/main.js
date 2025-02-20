'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('span.population');
  let totalPopulation = 0;
  const populations = [];

  populationElements.forEach((element) => {
    const populationText = element.textContent.replace(/,/g, '');
    const populationNumber = parseInt(populationText, 10);

    if (!isNaN(populationNumber)) {
      populations.push(populationNumber);
      totalPopulation += populationNumber;
    }
  });

  const averagePopulation = Math.round(totalPopulation / populations.length);

  function formatNumberWithCommas(number) {
    return number.toLocaleString('en-US');
  }

  const averageElement = document.querySelector('span.average-population');
  const totalElement = document.querySelector('span.total-population');

  averageElement.textContent = formatNumberWithCommas(averagePopulation);
  totalElement.textContent = formatNumberWithCommas(totalPopulation);
});
