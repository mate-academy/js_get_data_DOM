'use strict';

// write your code here
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculatePopulation() {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    return parseInt(el.textContent.replace(/,/g, ''), 10);
  });

  const total = populations.reduce((acc, curr) => acc + curr, 0);
  const average = total / populations.length;

  const formattedTotal = formatNumber(total);
  const formattedAverage = formatNumber(Math.round(average));

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;
}

calculatePopulation();
