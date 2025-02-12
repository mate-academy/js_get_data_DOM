'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('.population');

  const populations = [];

  populationElements.forEach(function (element) {
    const text = element.textContent;

    const number = parseInt(text.replace(/,/g, ''), 10);

    if (!isNaN(number)) {
      populations.push(number);
    }
  });

  let totalPopulation = 0;

  populations.forEach(function (num) {
    totalPopulation += num;
  });

  const averagePopulation = Math.round(totalPopulation / populations.length);

  const totalElement = document.querySelector('.total-population');
  const averageElement = document.querySelector('.average-population');

  totalElement.textContent = totalPopulation.toLocaleString();
  averageElement.textContent = averagePopulation.toLocaleString();
});
