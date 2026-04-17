'use strict';

const populations = document.querySelectorAll('.population');

const validNumbers = Array.from(populations)
  .map((span) => span.textContent.replace(/,/g, '').trim())
  .map((value) => Number(value))
  .filter((num) => Number.isFinite(num));

const total = validNumbers.reduce((sum, num) => sum + num, 0);
const average = validNumbers.length ? total / validNumbers.length : 0;
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

if (totalElement) {
  totalElement.textContent = total.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.textContent = Math.round(average).toLocaleString('en-US');
}
