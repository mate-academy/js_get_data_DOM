'use strict';

const populations = Array.from(document.querySelectorAll('.population')).map(
  (span) => parseFloat(span.textContent.replace(/\D/g, '')),
);

const totalAge = populations.reduce((sum, population) => sum + population, 0);
const averageAge = Math.round(totalAge / populations.length);

function formattedPopulation(numb) {
  return numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

document.getElementById('totalAge').textContent = formattedPopulation(totalAge);

document.getElementById('averageAge').textContent =
  formattedPopulation(averageAge);
