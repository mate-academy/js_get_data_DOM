'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('span.population');

  const rawValues = Array.from(populationSpans)
    .map((span) => span.textContent.trim())
    .filter((text) => text.length > 0);

  // Визначаємо роздільник тисяч на основі першого валідного рядка
  const detectThousandsSeparator = (sample) => {
    const match = sample.match(/(\d{1,3})([^\d])\d{3}/);

    return match ? match[2] : ','; // За замовчуванням — кома
  };

  const separator = detectThousandsSeparator(rawValues[0]);

  // Функція для очищення чисел від роздільника
  const parseNumber = (str) =>
    Number(str.replace(new RegExp(`\\${separator}`, 'g'), ''));

  const populations = rawValues
    .map((str) => parseNumber(str))
    .filter((num) => !isNaN(num));

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = total / populations.length;

  // Кастомна функція форматування з заданим роздільником
  const formatWithSeparator = (num, sep) => {
    return Math.round(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  };

  const averageSpan = document.querySelector('span.average-population');
  const totalSpan = document.querySelector('span.total-population');

  if (averageSpan) {
    averageSpan.textContent = formatWithSeparator(average, separator);
  }

  if (totalSpan) {
    totalSpan.textContent = formatWithSeparator(total, separator);
  }
});
