'use strict';

const spans = document.querySelectorAll('.population'); // wszystkie spany
const numbers = Array.from(spans).map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});
const total = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0,
);

const average = Math.round(total / numbers.length);

const span1 = document.querySelector('.total-population');

span1.textContent = total;

const span2 = document.querySelector('.average-population');

span2.textContent = average;
