'use strict';

// Отримуємо всі елементи <span> з класом "population"
const populationSpans = document.querySelectorAll('.population');

// Перетворюємо NodeList у масив і витягуємо числові значення населення
const populations = Array.from(populationSpans).map((span) => {
  // Беремо текст (наприклад "1,439,234,240")
  // Видаляємо коми і перетворюємо рядок у число
  return Number(span.textContent.replace(/,/g, ''));
});

// Обчислюємо загальну кількість населення
const totalPopulation = populations.reduce((sum, value) => {
  return sum + value;
}, 0);

// Обчислюємо середнє значення населення
// Math.round — щоб округлити до цілого числа
const averagePopulation = Math.round(totalPopulation / populations.length);

// Форматуємо числа з роздільниками тисяч (як у вихідних даних)
const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAverage = averagePopulation.toLocaleString('en-US');

// Вставляємо загальне значення в DOM
document.querySelector('.total-population').textContent = formattedTotal;

// Вставляємо середнє значення в DOM
document.querySelector('.average-population').textContent = formattedAverage;
