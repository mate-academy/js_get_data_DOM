'use strict';

const spans = document.querySelectorAll('span.population');

const number = Array.from(spans)
  .map((span) => span.textContent.replace(/,/g, ''))
  .map((text) => Number(text));

const total = number.reduce((acc, el) => acc + el, 0);
const average = number.length ? total / number.length : 0;

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

if (totalSpan) {
  totalSpan.textContent = total.toLocaleString('en-US');
}

if (averageSpan) {
  averageSpan.textContent = Math.round(average).toLocaleString('en-US');
}
