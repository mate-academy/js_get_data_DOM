'use strict';

const populations = document.querySelectorAll('.population');

// Парсимо, конвертуємо у Number, фільтруємо NaN
const numbers = Array.from(populations)
  .map((span) => {
    const text = span.textContent.trim();
    const num = Number(text.replace(/,/g, ''));

    return num;
  })
  .filter((num) => !Number.isNaN(num));

const total = numbers.reduce((sum, n) => sum + n, 0);
const average = total / numbers.length;

const formatNumber = (num) => num.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(average),
);
