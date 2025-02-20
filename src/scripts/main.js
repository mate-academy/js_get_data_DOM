'use strict';

// write your code here
// Отримуємо всі елементи <span> з класом "population"
const populationSpans = document.querySelectorAll('span.population');
// Масив для збереження числових значень
const populationValues = [];

// Проходимо через кожен елемент, перевіряємо та конвертуємо текст у число
populationSpans.forEach((span) => {
  const populationText = span.textContent.replace(/,/g, '');
  const populationNumber = parseFloat(populationText);

  // Перевіряємо, чи є значення числом
  if (!isNaN(populationNumber)) {
    populationValues.push(populationNumber); // Додаємо в масив, якщо це число
  }
});

// Обчислюємо загальну кількість
const totalPopulation = populationValues.reduce((sum, value) => sum + value, 0);

// Обчислюємо середнє значення
const averagePopulation = totalPopulation / populationValues.length;

// Функція для форматування чисел з тисячним розділювачем
function formatNumberWithCommas(number) {
  return number.toLocaleString();
}

// Отримуємо елементи для вставки результатів
const averagePopulationSpan = document.querySelector('span.average-population');
const totalPopulationSpan = document.querySelector('span.total-population');

// Замінюємо текст на обчислені значення з тисячним розділювачем
if (averagePopulationSpan) {
  averagePopulationSpan.textContent = formatNumberWithCommas(averagePopulation);
}

if (totalPopulationSpan) {
  totalPopulationSpan.textContent = formatNumberWithCommas(totalPopulation);
}
