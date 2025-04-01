'use strict';

const populationElements = document.querySelectorAll('.population');

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populations = [];

populationElements.forEach((el) => {
  let num = parseInt(el.textContent.replace(/,/g, ''), 10);

  if (isNaN(num)) {
    num = 0;
  }

  populations.push(num);
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

const averagePopulation = Math.round(totalPopulation / populations.length);

const formatNumber = (num) => num.toLocaleString();

if (totalElement) {
  totalElement.textContent = formatNumber(totalPopulation);
}

if (averageElement) {
  averageElement.textContent = formatNumber(averagePopulation);
}
