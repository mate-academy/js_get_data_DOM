'use strict';

const population = [...document.querySelectorAll('span.population')];
const total = [];

for (const el of population) {
  const text = el.textContent;
  const number = text.replace(/,/g, '');

  total.push(number);
}

const sum = total.reduce((acc, el) => Number(acc) + Number(el));
const averege = sum / 10;

const textSum = document.querySelector('span.total-population');
const textAverege = document.querySelector('span.average-population');

textSum.textContent = sum.toLocaleString('en-US');
textAverege.textContent = averege.toLocaleString('en-US');
