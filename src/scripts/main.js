'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populations = document.querySelectorAll('span.population');

  const populationNumbers = Array.from(populations).map((span) => {
    const text = span.textContent.replace(/,/g, '');
    const number = Number(text);

    return number;
  });

  const totalElement = document.querySelector('.total-population');
  const averageElement = document.querySelector('.average-population');

  const total = populationNumbers.reduce((acc, number) => acc + number, 0);
  const average = Math.round(total / populationNumbers.length);

  if (totalElement) {
    totalElement.textContent = total.toLocaleString();
  }

  if (averageElement) {
    averageElement.textContent = average.toLocaleString();
  }
});
