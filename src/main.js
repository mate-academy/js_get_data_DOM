'use strict';

// 1. Використовуємо класи для вибору елементів, як того вимагає завдання
const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

// 2. Отримуємо масив чисел
const populations = Array.from(populationElements).map((el) => {
  // Видаляємо коми для коректного перетворення в число
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});

// 3. Обчислюємо загальну суму
const total = populations.reduce((sum, num) => sum + num, 0);

// 4. Обчислюємо середнє та обов'язково округлюємо до найближчого цілого
const average = Math.round(total / populations.length);

// 5. Виводимо результат у DOM, форматуючи числа назад з комами
// (Зайві виклики .toLocaleString() без присвоєння видалено)
totalPopulationElement.textContent = total.toLocaleString();
averagePopulationElement.textContent = average.toLocaleString();
