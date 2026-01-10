'use strict';

const populationElements = document.querySelectorAll('[data-target="population"]');
const totalPopulationElement = document.querySelector('[data-target="total-population"]');
const averagePopulationElement = document.querySelector('[data-target="average-population"]');

const populations = Array.from(populationElements).map((el) => {
  // Видаляємо коми з тексту, щоб отримати чисте число
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});

// Обчислюємо загальну суму
const total = populations.reduce((sum, num) => sum + num, 0);

// Обчислюємо середнє та округлюємо до цілого числа
const average = Math.round(total / populations.length);

// Виводимо результати з форматуванням (додаємо коми назад для відображення)
totalPopulationElement.textContent = total.toLocaleString();
averagePopulationElement.textContent = average.toLocaleString();
