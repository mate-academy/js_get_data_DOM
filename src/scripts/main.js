'use strict';

// Шаг 1: Получаем элементы и извлекаем из них текст
const populationElements = document.querySelectorAll('.population');
const populationStrings = Array.from(populationElements).map(
  (el) => el.textContent,
);

// Шаг 2: Очищаем строки от запятых и превращаем в числа
const populationNumbers = populationStrings.map((str) => {
  const cleanString = str.replaceAll(',', '');

  return Number(cleanString);
});

// Шаг 3: Вычисляем сумму и среднее значение
const totalPopulation = populationNumbers.reduce(
  (sum, current) => sum + current,
  0,
);
const averagePopulation = totalPopulation / populationNumbers.length;

// Шаг 4 и 5: Находим финальные спаны и выводим отформатированный результат
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = totalPopulation.toLocaleString('en-US');
averageSpan.textContent = Math.round(averagePopulation).toLocaleString('en-US');
