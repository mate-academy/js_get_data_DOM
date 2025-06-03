'use strict';

// Отримуємо всі елементи з класом "population"
const populationElements = document.querySelectorAll('.population');

// Парсимо та конвертуємо значення у числа
const populations = Array.from(populationElements).map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});

// Обчислюємо загальне населення
const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

// Обчислюємо середнє населення
const averagePopulation = Math.round(totalPopulation / populations.length);

// Форматуємо числа з тисячними роздільниками
const formatNumber = (num) => num.toLocaleString();

// Замінюємо текст у відповідних елементах
document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
