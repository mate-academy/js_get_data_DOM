'use strict';

const populationElements = document.querySelectorAll('.population');

let total = 0;

populationElements.forEach(function (element) {
  const text = element.textContent;

  // видаляємо ВСЕ крім цифр
  const cleanText = text.replace(/[^\d]/g, '');

  const number = Number(cleanText);

  if (!isNaN(number)) {
    total += number;
  }
});

const average = populationElements.length
  ? total / populationElements.length
  : 0;

const formattedTotal = total.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
