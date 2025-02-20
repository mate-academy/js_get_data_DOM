'use strict';

// write your code here
// Отримуємо всі елементи з класом population
const populationElements = document.getElementsByClassName('population');

// Перетворюємо HTMLCollection в масив і отримуємо числа
const numbers = Array.from(populationElements).map((elem) =>
  parseInt(elem.innerHTML.replace(/,/g, ''), 10),);

// Обчислюємо суму
const sum = numbers.reduce((a, b) => a + b, 0);

// Обчислюємо середнє значення
const avg = sum / numbers.length || 0;

// Форматуємо числа з роздільником тисяч
const formattedTotal = sum.toLocaleString();
const formattedAverage = avg.toLocaleString();

// Замінюємо текст у span.total-population
document.querySelector('.total-population').innerHTML = formattedTotal;

// Замінюємо текст у span.average-population
document.querySelector('.average-population').innerHTML = formattedAverage;
