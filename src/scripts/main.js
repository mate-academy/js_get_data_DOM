'use strict';

function formatNumber(number) {
  return number.toLocaleString();
}

// Отримуємо всі елементи з класом 'population'
const populations = Array.from(document.querySelectorAll('span.population'));

// Перетворюємо текст у числові значення
const populationNumbers = populations.map((span) => {
  const text = span.textContent.trim();
  const number = parseInt(text.replace(/[^0-9]/g, ''), 10);

  return !isNaN(number) ? number : 0; // Перевірка на число
});

// Обчислюємо загальну суму та середнє значення
const totalPopulation = populationNumbers.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);
