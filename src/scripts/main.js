'use strict';

const spans = document.querySelectorAll('.population');

const numbers = Array.from(spans).map((span) => {
  return parseInt(span.textContent.replace(/\D/g, ''), 10);
});

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

const average = sum / numbers.length;

const sumSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

sumSpan.textContent = sum;
averageSpan.textContent = average;
