'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populations = document.querySelectorAll('.population');

  const arrayOfPopulation = Array.from(populations)
    .map((span) => {
      let text = span.textContent.trim();

      text = text.replace(/[,.\s\u00A0]/g, '');

      const number = Number(text);

      return Number.isFinite(number) ? number : null;
    })
    .filter((n) => n !== null);

  const totalSum = arrayOfPopulation.reduce((sum, p) => sum + p, 0);
  const countOfCountries = arrayOfPopulation.length;
  const totalAverage = countOfCountries
    ? Math.round(totalSum / arrayOfPopulation.length)
    : 0;

  const sampleText = populations[0]?.textContent.trim();
  const separator = sampleText.match(/[,.\s\u00A0]/)?.[0] || ',';

  function formatNumberWithSeparator(number, separatorArg) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorArg);
  }

  const totalElement = document.querySelector('.total-population');
  const averageElement = document.querySelector('.average-population');

  if (totalElement) {
    totalElement.textContent = formatNumberWithSeparator(totalSum, separator);
  }

  if (averageElement) {
    averageElement.textContent = formatNumberWithSeparator(
      totalAverage,
      separator,
    );
  }
});
