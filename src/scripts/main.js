'use strict';

// Збираємо всі "span" елементи з класом "population"
// І через "..." перетворюємо колекцію на масив
const elements = [...document.querySelectorAll('span.population')];

// Проходимось по кожному елементу "span", перетворюємо на число і видаляємо ","
// textContent потрібен для отримання значення цього "span" у масиві, приклад:
// -----------------------------------------------------------------------------
// HTML
// <span class="random-class">9,234,240</span>
// <span class="random-class">240</span>
// JS
// const elements = [...document.querySelectorAll('span.random-class')];
// const num1 = Number(elements[0].textContent.split(',').join('')); // 9234240
// const num2 = Number(elements[1].textContent.replace(/,/g, '')); // 240
// ".split(',').join('')" === ".replace(/,/g, '')"
// -----------------------------------------------------------------------------
const numbers = elements.map((el) => {
  return Number(el.textContent.split(',').join(''));
});

// Створюємо суму
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Створюжмо середнє значення
const averageValue = Math.round(sum / numbers.length);

// Перетворюємо на зміні span з класами "average-population","total-population"
const averagePopulation = document.querySelector('span.average-population');
const totalPopulation = document.querySelector('span.total-population');

// Форматує числа і дати під локаль,
// додаючи роздільники (кома, крапка), валюту та відсотки (через опції).
// -----------------------------------------------------------------------------
// const num = 1234.56;
// const bigNum = 1234567890;
// num.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH' });
// "₴1 234,56"
// num.toLocaleString('en-US', { style: 'percent' });
// "123,456%"
// bigNum.toLocaleString('uk-UA', { notation: 'compact' }); // "1,23 млрд"
// bigNum.toLocaleString('en-US', { notation: 'compact' }); // "1.23B"

// eslint-disable-next-line max-len
// Промпт: Поясни метод toLocaleString() у JS та покажи всі його опції для чисел і дат з прикладами.
// -----------------------------------------------------------------------------
const formattedSum = sum.toLocaleString('en-US');
const formattedAverage = averageValue.toLocaleString('en-US');

// Замінюємо текст у span
averagePopulation.textContent = formattedAverage;
totalPopulation.textContent = formattedSum;
