'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populations = document.querySelectorAll('.population');

  if (!populations.length) {
    return;
  }

  const sampleText = populations[0]?.textContent?.trim() || '';
  let groupingChar = ',';
  let decimalChar = '.';

  if (sampleText.includes(',') && sampleText.includes('.')) {
    const lastComma = sampleText.lastIndexOf(',');
    const lastDot = sampleText.lastIndexOf('.');

    if (lastComma > lastDot) {
      decimalChar = ',';
      groupingChar = '.';
    }
  } else if (sampleText.includes(',')) {
    const matches = sampleText.match(/,/g);

    groupingChar = matches && matches.length > 1 ? ',' : '';
    decimalChar = groupingChar ? '.' : ',';
  } else if (sampleText.includes('.')) {
    const matches = sampleText.match(/\./g);

    groupingChar = matches && matches.length > 1 ? '.' : '';
    decimalChar = groupingChar ? ',' : '.';
  }

  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const arrayOfPopulation = Array.from(populations)
    .map((span) => {
      let text = span.textContent?.trim();

      if (!text) {
        return null;
      }

      if (groupingChar) {
        text = text.replace(new RegExp(escapeRegExp(groupingChar), 'g'), '');
      }

      if (decimalChar && decimalChar !== '.') {
        text = text.replace(decimalChar, '.');
      }

      const number = Number(text);

      return Number.isFinite(number) ? number : null;
    })
    .filter((n) => n !== null);

  const countOfCountries = arrayOfPopulation.length;
  const totalSum = arrayOfPopulation.reduce((a, b) => a + b, 0);
  const totalAverage = countOfCountries
    ? Math.round(totalSum / countOfCountries)
    : 0;

  function formatNumberWithSeparator(number, separatorArg) {
    const [intPart, fracPart] = number.toString().split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separatorArg);

    return fracPart ? formattedInt + decimalChar + fracPart : formattedInt;
  }

  const totalElement = document.querySelector('.total-population');
  const averageElement = document.querySelector('.average-population');

  if (totalElement) {
    totalElement.textContent = formatNumberWithSeparator(
      totalSum,
      groupingChar,
    );
  }

  if (averageElement) {
    averageElement.textContent = formatNumberWithSeparator(
      totalAverage,
      groupingChar,
    );
  }
});
