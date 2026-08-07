'use strict';

const elements = document.querySelectorAll('.population');

const numbers = Array.from(elements).map((element) => {
  const cleanString = element.textContent.replace(/,/g, '');

  const number = Number(cleanString);

  return isNaN(number) ? 0 : number;
});

const total = numbers.reduce((tot, curr) => curr + tot, 0);
const average = total / numbers.length;

const formatter = new Intl.NumberFormat('en-US');
const formatterTotal = formatter.format(total);
const formatterAverage = formatter.format(average);

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

if (averageSpan) {
  averageSpan.textContent = formatterAverage;
}

if (totalSpan) {
  totalSpan.textContent = formatterTotal;
}
