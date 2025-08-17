'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Отримуємо всі span з класом withpopulation
  const populationSpans = document.querySelectorAll('.withpopulation');

  // 2. Перетворюємо текст у числа
  const populations = Array.from(populationSpans)
    .map((span) => span.textContent.replace(/,/g, ''))
    .map((num) => Number(num))
    .filter((num) => !isNaN(num));

  // 3. Обчислюємо total та average
  const total = populations.reduce((sum, val) => sum + val, 0);
  const average = populations.length > 0 ? total / populations.length : 0;

  // 4. Форматуємо з роздільником тисяч
  const formatter = new Intl.NumberFormat('en-US');

  // 5. Замінюємо текст у відповідних span
  const totalSpan = document.querySelector('.total-population');
  const averageSpan = document.querySelector('.average-population');

  if (totalSpan) {
    totalSpan.textContent = formatter.format(total);
  }

  if (averageSpan) {
    averageSpan.textContent = formatter.format(Math.round(average));
  }
});
