'use strict';

// Збираємо елементи до купи, використовуємо querySelectorAll()
const allCountries = document.querySelectorAll('.population');

// Перетворюємо все в текстовий масив
const populationTexts = [...allCountries].map((element) => element.textContent);

// Завдяки reduce обчислюю загальну кількість країн
const total = populationTexts.reduce((accumulator, num) => {
  const toNum = parseInt(num.split(',').join(''), 10);
  const returns = accumulator + toNum;

  return returns;
}, 0);

// Дізнаємось середнє
const average = total / populationTexts.length;

// Оголошую змінні що посилаються на елементи DOM за допомогою querySelector()
const elementTotal = document.querySelector('.total-population');
const elementAverage = document.querySelector('.average-population');

// Редагую код за допомогою textContent і використовую 'Thousand Separators'
elementTotal.textContent = total.toLocaleString('en-US');
elementAverage.textContent = average.toLocaleString('en-US');
