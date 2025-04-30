'use strict';

// 1. Знаходимо всі елементи з даними про населення
const populationElements = document.querySelectorAll('.population');

// Ініціалізуємо змінні для розрахунків
let totalPopulation = 0;
let numberOfCountries = 0;

// 2. Перебираємо знайдені елементи, щоб отримати числа і порахувати суму
populationElements.forEach((element) => {
  // Отримуємо текстовий вміст
  const textContent = element.textContent; // Напр.: "1,439,234,240"

  // Прибираємо коми, щоб отримати рядок тільки з цифрами
  const numericString = textContent.replaceAll(',', ''); // Напр.: "1439234240"

  // Перетворюємо очищений рядок на число
  const populationNumber = Number(numericString); // Напр.: 1439234240 (число)

  // Перевіряємо, чи перетворення було успішним
  if (!isNaN(populationNumber)) {
    // Додаємо число до загальної суми
    totalPopulation += populationNumber;

    // Збільшуємо лічильник оброблених країн
    numberOfCountries++;
  }
});

// 3. Розраховуємо середнє значення (після завершення циклу)
let averagePopulation = 0; // Початкове значення

// Робимо розрахунок тільки якщо є країни, щоб уникнути ділення на нуль
if (numberOfCountries > 0) {
  const rawAverage = totalPopulation / numberOfCountries; // Може бути дробовим

  // Округлюємо до найближчого цілого
  averagePopulation = Math.round(rawAverage);
}

// 5. Форматуємо числа для виведення (додаємо коми)
const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAverage = averagePopulation.toLocaleString('en-US');

// 4. Знаходимо елементи на сторінці, куди потрібно вивести результати
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

// Перевіряємо, чи знайшли елементи, і оновлюємо їх вміст
if (totalElement && averageElement) {
  // Вставляємо відформатовані рядки в HTML
  totalElement.textContent = formattedTotal;
  averageElement.textContent = formattedAverage; // Твій доданий рядок!
}

// Виводимо фінальні розрахунки в консоль для перевірки (необов'язково)
