'use strict';

// write your code here
// 1. Отримати всі елементи з класом 'population'
const populationElements = document.querySelectorAll('span.population');

// 2. Зібрати всі текстові дані та перетворити їх у числа
const populations = Array.from(populationElements)
  .map((el) => el.textContent.replace(/,/g, '')) // Видалити роздільники тисяч
  .map((text) => parseInt(text, 10)) // Перетворити у числа
  .filter((num) => !isNaN(num)); // Відфільтрувати некоректні значення

// 3. Обчислити загальне та середнє значення
const suma = populations.reduce((sum, num) => sum + num, 0);
const average = Math.floor(suma / populations.length);
// Округлити середнє значення

// 4. Форматувати числа із роздільником тисяч
const formatNumber = (num) => Math.floor(num).toLocaleString('en-US');

// 5. Замінити текст у відповідних елементах
const totalElement = document.querySelector('span.total-population');
const averageElement = document.querySelector('span.average-population');

if (totalElement) {
  totalElement.textContent = formatNumber(suma);
}

if (averageElement) {
  averageElement.textContent = formatNumber(average);
}
