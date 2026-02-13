'use strict';

// 1. Отримуємо всі елементи
const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans).map((span) => {
  const text = span.innerText.replace(/,/g, '');

  return Number(text);
});

const total = populations.reduce((sum, val) => sum + val, 0);
const average = total / populations.length;

document.querySelector('.total-population').innerText = total.toLocaleString();

document.querySelector('.average-population').innerText =
  Math.round(average).toLocaleString();
