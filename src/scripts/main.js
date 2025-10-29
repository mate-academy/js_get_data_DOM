'use strict';

function formatNumber(number) {
  return number.toLocaleString('en-US');
}

const spans = document.querySelectorAll('span.population');

let totalValue = 0;
let count = 0;

spans.forEach((span) => {
  const textContent = span.textContent.trim();
  // видаляємо коми, пробіли, крапки (на випадок різних форматів)
  const cleanedText = textContent.replace(/[,\s.]+/g, '');
  const populationNumber = Number(cleanedText);

  if (!isNaN(populationNumber)) {
    totalValue += populationNumber;
    count++;
  }
});

if (count > 0) {
  const averageValue = totalValue / count;

  const averageSpan = document.querySelector('span.average-population');
  const totalSpan = document.querySelector('span.total-population');

  // Округлюємо середнє до цілого перед форматуванням
  const roundedAverage = Math.round(averageValue);

  if (averageSpan) {
    averageSpan.textContent = formatNumber(roundedAverage);
  }

  if (totalSpan) {
    totalSpan.textContent = formatNumber(totalValue);
  }
}
