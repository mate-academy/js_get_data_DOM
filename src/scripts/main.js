'use strict';

const elements = document.querySelectorAll('.population');
const numbers = [];

for (const element of elements) {
  numbers.push(Number(element.textContent.replace(/,/g, '')));
}

const total = numbers.reduce((sum, element) => sum + element, 0);
const average = total / numbers.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');

averageElement.textContent = Math.round(average).toLocaleString('en-US');
