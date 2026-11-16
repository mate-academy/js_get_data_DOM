'use strict';

const populations = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const numbers = Array.from(populations)
  .map((element) => {
    const text = element.textContent;
    const cleaned = text.replace(/,/g, '');

    return Number(cleaned);
  })

  .filter((number) => Number.isFinite(number));

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

const average = numbers.length > 0 ? total / numbers.length : 0;

totalElement.textContent = total.toLocaleString('en-US');

averageElement.textContent = average.toLocaleString('en-US');
