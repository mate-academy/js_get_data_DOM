'use strict';

// Функція для очищення значень від ком і пробілів, щоб конвертувати в числа
function parsePopulation(value) {
  return parseInt(value.replace(/,/g, ''), 10);
}

// Функція для форматування числа з розділенням тисяч
function formatNumberWithCommas(number) {
  return number.toLocaleString();
}

// Основна логіка
document.getElementById('calculateBtn').addEventListener('click', function () {
  // Отримуємо всі елементи з класом population
  const populations = document.querySelectorAll('.population');

  // Масив для зберігання чисел
  const populationNumbers = [];

  populations.forEach((span) => {
    const value = span.textContent.trim();
    const number = parsePopulation(value);

    if (!isNaN(number)) {
      populationNumbers.push(number);
    }
  });

  // Обчислюємо загальну суму
  const total = populationNumbers.reduce((acc, curr) => acc + curr, 0);

  // Обчислюємо середнє значення
  const average = total / populationNumbers.length;

  // Форматуємо суму і середнє з розділювачем тисяч
  const formattedTotal = formatNumberWithCommas(total);
  const formattedAverage = formatNumberWithCommas(average.toFixed(0));

  // Заміщаємо текст в елементах для середнього значення та суми
  document.querySelector('.average-population').textContent =
    `Average: ${formattedAverage}`;

  document.querySelector('.total-population').textContent =
    `Total: ${formattedTotal}`;
});
