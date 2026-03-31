'use strict';

// Знаходимо всі необхідні елементи в DOM
const populationSpans = document.querySelectorAll('.population');
const averageDisplay = document.querySelector('.average-population');
const totalDisplay = document.querySelector('.total-population');

// Ініціалізуємо змінні для підрахунку
let totalSum = 0;
let count = 0;

// Використовуємо цикл for...of для перебору елементів
for (const span of populationSpans) {
  // Отримуємо текст (наприклад, "1,200,500")
  const textValue = span.textContent;

  // Видаляємо всі нецифрові символи (коми, пробіли) за допомогою RegExp \D
  // Потім конвертуємо очищений рядок у ціле число
  const number = parseInt(textValue.replace(/\D/g, ''), 10);

  // Перевіряємо, чи отримане значення є коректним числом
  if (!isNaN(number)) {
    totalSum += number; // Додаємо до загальної суми
    count++;            // Збільшуємо лічильник елементів
  }
}

// Розраховуємо середнє значення (округляємо до найближчого цілого)
// Додаємо перевірку на нуль, щоб уникнути помилки ділення на 0
const averageValue = count > 0 ? Math.round(totalSum / count) : 0;

// Форматуємо числа з роздільниками тисяч і виводимо в HTML
// toLocaleString('en-US') автоматично розставить коми
totalDisplay.textContent = totalSum.toLocaleString('en-US');
averageDisplay.textContent = averageValue.toLocaleString('en-US');
