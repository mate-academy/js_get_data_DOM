'use strict';

const populations = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const numbers = Array.from(populations).map((element) => {
  const text = element.textContent;
  const cleaned = text.replace(/,/g, '');

  return Number(cleaned);
});

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

const average = total / numbers.length;

totalElement.textContent = total.toLocaleString('en-US');

averageElement.textContent = Math.round(average).toLocaleString('en-US');
