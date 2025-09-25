'use strict';

// write your code here
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculatePopulationStats() {
  const populationSpans = document.querySelectorAll('.population');
  let total = 0;
  let count = 0;

  populationSpans.forEach((span) => {
    const text = span.textContent.replace(/,/g, '');
    const num = parseFloat(text);

    if (!isNaN(num)) {
      total += num;
      count++;
    }
  });

  const average = count > 0 ? total / count : 0;

  const averageSpan = document.querySelector('.average-population');
  const totalSpan = document.querySelector('.total-population');

  if (averageSpan) {
    averageSpan.textContent = formatNumber(Math.round(average));
  }

  if (totalSpan) {
    totalSpan.textContent = formatNumber(Math.round(total));
  }
}

document.addEventListener('DOMContentLoaded', calculatePopulationStats);
