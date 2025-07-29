'use strict';

// Знаходимо всі елементи з класом .population
const populationElements = document.querySelectorAll('.population');

// Перетворюємо текст у числа, видаляючи коми і фільтруючи валідні значення
const populations = Array.from(populationElements)
  .map((el) => Number(el.textContent.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

// Обчислюємо загальне та середнє значення
const total = populations.reduce((sum, val) => sum + val, 0);
const average = total / populations.length;

// Форматуємо з роздільником тисяч
const formatter = new Intl.NumberFormat();

// Вставляємо відформатовані значення в HTML
document.querySelector('.total-population').textContent =
  formatter.format(total);
document.querySelector('.average-population').textContent = formatter.format(
  Math.round(average),
);
