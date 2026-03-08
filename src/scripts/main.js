'use strict';

// 1. Знаходимо всі елементи з класом "population"
const populationSpans = document.querySelectorAll('.population');
const totalDisplay = document.querySelector('.total-population');
const averageDisplay = document.querySelector('.average-population');

let total = 0;

// 2. Перебираємо елементи та збираємо дані
populationSpans.forEach((span) => {
  // Видаляємо коми, щоб JavaScript міг сприйняти це як число
  const number = Number(span.textContent.replace(/,/g, ''));

  if (!isNaN(number)) {
    total += number;
  }
});

// 3. Рахуємо середнє значення
const count = populationSpans.length;
const average = count > 0 ? total / count : 0;

// 4. Форматуємо числа з роздільником (комами) та виводимо в HTML
// toLocaleString('en-US') зробить формат "1,234,567"
totalDisplay.textContent = total.toLocaleString('en-US');
averageDisplay.textContent = Math.round(average).toLocaleString('en-US');
