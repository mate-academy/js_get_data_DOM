'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Получаем все элементы с классом population
  const populationElements = document.querySelectorAll('.population');

  const populations = [];

  // Проходим по каждому элементу и извлекаем данные о населении
  populationElements.forEach((element) => {
    // Убираем запятые из текста, чтобы преобразовать его в число
    const populationText = element.textContent.replace(/,/g, '');
    const populationNumber = parseInt(populationText, 10);

    // Если это корректное число, добавляем его в массив populations
    if (!isNaN(populationNumber)) {
      populations.push(populationNumber);
    }
  });

  // Считаем общее и среднее значение населения
  const totalPopulation = populations.reduce((sum, pop) => sum + pop, 0);
  const averagePopulation = totalPopulation / populations.length;

  // Форматируем числа с разделителем для тысяч (запятая)
  const totalPopulationFormatted = totalPopulation.toLocaleString('en-US');
  const averagePopulationFormatted =
    Math.round(averagePopulation).toLocaleString('en-US');

  // Заменяем текст "Calculate it!" на рассчитанные значения
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector(
    '.average-population',
  );

  if (totalPopulationElement) {
    totalPopulationElement.textContent = totalPopulationFormatted;
  }

  if (averagePopulationElement) {
    averagePopulationElement.textContent = averagePopulationFormatted;
  }
});
