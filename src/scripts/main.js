'use strict';

// 1. Отримуємо всі елементи з класом "population"
const populationElements = document.querySelectorAll('.population');

// 2. Парсимо текст → число
const populations = Array.from(populationElements)
  .map((el) => el.textContent.replace(/,/g, '')) // прибираємо коми
  .map((num) => Number(num)) // конвертуємо в число
  .filter((num) => !Number.isNaN(num)); // відкидаємо нечислові значення

// 3. Рахуємо total та average
const total = populations.reduce((sum, n) => sum + n, 0);
const average = total / populations.length;

// 4. Форматуємо з thousands separator
const format = (num) => num.toLocaleString('en-US');

// 5. Вставляємо значення в DOM
document.querySelector('.total-population').textContent = format(total);

document.querySelector('.average-population').textContent = format(
  Math.round(average),
);
