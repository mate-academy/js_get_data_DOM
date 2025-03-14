'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populations = document.querySelectorAll('span.population');

  const populationNumbers = Array.from(populations).map((span) => {
    const text = span.textContent.replace(/,/g, '');
    const number = Number(text);

    return number;
  });

  const total = populationNumbers.reduce((acc, number) => acc + number, 0);
  const average = Math.round(total / populationNumbers.length);

  const averageElement = document.querySelector('.average-population');
  const totalElement = document.querySelector('.total-population');

  if (averageElement) {
    averageElement.textContent = average.toLocaleString();
  }

  if (totalElement) {
    totalElement.textContent = total.toLocaleString();
  }
});
